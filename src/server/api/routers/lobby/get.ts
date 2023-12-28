import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const get = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma }, input: { roomId } }) => {
    const players = await prisma.playSession.findMany({
      where: {
        roomId,
      },
      select: {
        order: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return players.map(({ order, user: { id: userId, name } }) => ({ order, userId, name }))
  })
