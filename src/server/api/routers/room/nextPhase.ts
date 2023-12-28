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
          increment: 1,
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
  })
