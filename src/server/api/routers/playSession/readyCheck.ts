import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { VOTE } from '@prisma/client'

export const readyCheck = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma, session }, input: { roomId } }) => {
    const playersReady = await prisma.playSession.findMany({
      where: {
        userId: session.user.id,
        roomId,
      },
      select: {
        latestVote: true,
      },
    })

    return { playersReady: playersReady.every(({ latestVote }) => latestVote === VOTE.YES) }
  })
