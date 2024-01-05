import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const get = protectedProcedure
  .input(z.object({ name: z.string() }))
  .query(async ({ ctx: { prisma }, input: { name } }) => {
    return prisma.room.findFirst({
      where: { name },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
      },
    })
  })
