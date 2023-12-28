import { z } from 'zod'

import { protectedProcedure } from '../../trpc'

export const getPlayers = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma }, input: { roomId } }) => {
    const players = await prisma.playSession.findMany({
      where: {
        roomId,
      },
      select: {
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
      players: players.map(({ user }) => ({ name: user.name ?? user.email, userId: user.id })),
    }
  })
