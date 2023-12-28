import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const remove = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .mutation(async ({ ctx: { prisma, session }, input: { roomId } }) => {
    await prisma.playSession.deleteMany({
      where: {
        roomId,
        userId: session.user.id,
      },
    })
  })
