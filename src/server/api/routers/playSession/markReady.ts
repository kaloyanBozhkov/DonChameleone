import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { VOTE } from '@prisma/client'

export const markReady = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .query(async ({ ctx: { prisma, session }, input: { roomId } }) => {
    await prisma.playSession.updateMany({
      where: {
        userId: session.user.id,
        roomId,
      },
      data: {
        latestVote: VOTE.YES,
      },
    })
  })
