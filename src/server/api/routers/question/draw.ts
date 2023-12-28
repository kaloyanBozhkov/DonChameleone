import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'
import { TRPCError } from '@trpc/server'

import { isAtPhase } from '../../common'

export const draw = protectedProcedure
  .input(z.object({ cardPackId: z.string().uuid(), roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma }, input: { cardPackId, roomId } }) => {
    await isAtPhase(prisma, GAME_PHASE.QUESTION_TIME, roomId)
    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      select: {
        prevQuestions: true,
        players: {
          where: {
            isOwner: true,
          },
          select: {
            user: {
              select: {
                ownership: {
                  select: {
                    cardPacks: {
                      where: {
                        id: cardPackId,
                      },
                      select: {
                        questions: {
                          select: {
                            q: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!room?.players?.[0]?.user?.ownership?.[0]?.cardPacks?.[0]?.questions)
      throw new TRPCError({
        message: 'Game master does not own this card pack',
        code: 'UNAUTHORIZED',
      })

    const prevQs = room.prevQuestions as string[],
      qs = room.players[0].user.ownership[0].cardPacks[0].questions
        .map(({ q }) => q)
        .filter((q) => !prevQs.includes(q)),
      randomQ = Math.floor(Math.random() * qs.length),
      q = qs[randomQ]!

    await prisma.room.update({
      where: {
        id: roomId,
      },
      data: {
        prevQuestions: [...prevQs, q],
      },
    })

    return q
  })
