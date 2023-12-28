import { z } from 'zod'

import { protectedProcedure } from '../../trpc'

export const votesCount = protectedProcedure
  .input(z.object({ roomId: z.string().uuid(), label: z.string() }))
  .query(async ({ ctx: { prisma }, input: { roomId, label } }) => {
    const votes = await prisma.vote.findMany({
        where: {
          label,
          playSession: {
            roomId,
          },
        },
        select: {
          userId: true,
          votedUserId: true,
        },
      }),
      totalPlayers = await prisma.playSession.count({
        where: {
          roomId,
          isAbandoned: false,
        },
      })

    return { votes, everyoneVoted: votes.length === totalPlayers }
  })
