import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE, VOTE } from '@prisma/client'

import { isGameOwner } from '../../common'

export const nextPhase = protectedProcedure
  .input(z.object({ roomId: z.string().uuid(), phase: z.nativeEnum(GAME_PHASE) }))
  .mutation(async ({ ctx: { prisma, session }, input: { roomId, phase } }) => {
    await isGameOwner(prisma, session.user.id, roomId)
    await prisma.room.update({
      data: {
        phase,
        round: {
          increment: GAME_PHASE.STARTED === phase ? 1 : 0,
        },
      },
      where: {
        id: roomId,
        players: {
          some: {
            isOwner: true,
            userId: session.user.id,
          },
        },
      },
    })

    await prisma.playSession.updateMany({
      where: {
        roomId,
      },
      data: {
        latestVote: VOTE.NOT_VOTED,
      },
    })

    if (phase === GAME_PHASE.ROLES) {
      const userIds = await prisma.playSession.findMany({
          where: {
            roomId,
          },
          select: {
            userId: true,
            id: true,
          },
        }),
        rng = Math.floor(userIds.length * Math.random())
      // @TODO add second liar if more than X players?

      await prisma.$transaction(
        userIds.map(({ userId, id }, idx) =>
          prisma.playSession.update({
            where: {
              id,
              roomId,
              userId,
            },
            data: {
              isLiar: idx === rng,
            },
          })
        )
      )
    }
  })
