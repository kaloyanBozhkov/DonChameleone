import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const add = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .mutation(async ({ ctx: { prisma, session }, input: { roomId } }) => {
    const order = await prisma.playSession.count({ where: { roomId } })
    await prisma.playSession.create({
      data: {
        userId: session.user.id,
        roomId,
        order: order + 1,
      },
      select: null,
    })
  })
