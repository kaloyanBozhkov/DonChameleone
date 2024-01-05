import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const getPlayers = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma }, input: { roomId } }) => {
    const players = await prisma.playSession.findMany({
      where: {
        roomId,
      },
      select: {
        isOwner: true,
        user: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
    })

    return {
      players: players.map(({ user, isOwner }) => ({
        name: user.name ?? user.email,
        userId: user.id,
        isOwner,
      })),
    }
  })
