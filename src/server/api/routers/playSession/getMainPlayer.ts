import { protectedProcedure } from '@/server/api/trpc'

export const getMainPlayer = protectedProcedure.query(async ({ ctx: { prisma, session } }) => {
  const player = await prisma.user.findUniqueOrThrow({
    where: {
      id: session.user.id,
    },
    select: {
      name: true,
      email: true,
      id: true,
      ownership: {
        select: {
          cardPack: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })

  return {
    name: player.name ?? player.email ?? 'Unknown',
    id: player.id,
    cardPackIds: player.ownership.map(({ cardPack }) => cardPack.id),
  }
})
