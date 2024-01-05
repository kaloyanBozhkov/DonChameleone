import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'

import { isAtPhase } from '../../common'

export const draw = protectedProcedure
  .input(z.object({ cardPackId: z.string().uuid(), roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma }, input: { cardPackId, roomId } }) => {
    await isAtPhase(prisma, GAME_PHASE.QUESTION_TIME, roomId)
    const room = await prisma.room.findUniqueOrThrow({
      where: {
        id: roomId,
      },
      select: {
        prevQuestions: true,
        players: {
          where: {
            isOwner: true,
            user: {
              ownership: {
                some: {
                  cardPackId,
                },
              },
            },
          },
          select: {
            user: {
              select: {
                ownership: {
                  select: {
                    cardPack: {
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

    const prevQs = room.prevQuestions as string[],
      qs = room
        .players![0]!.user.ownership[0]!.cardPack!.questions.map(({ q }) => q)
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
