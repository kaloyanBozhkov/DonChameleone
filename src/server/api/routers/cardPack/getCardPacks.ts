import { publicProcedure } from '@/server/api/trpc'

export const getCardPacks = publicProcedure.query(async ({ ctx: { prisma } }) => {
  return prisma.cardPack.findMany({
    select: {
      id: true,
      title: true,
    },
  })
})
