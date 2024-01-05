import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { VOTE } from '@prisma/client'

export const vote = protectedProcedure
  .input(z.object({ vote: z.nativeEnum(VOTE), votedUserId: z.string(), label: z.string() }))
  .mutation(async ({ ctx: { prisma, session }, input: { votedUserId, label } }) => {
    await prisma.vote.create({
      data: {
        userId: session.user.id,
        votedUserId,
        label,
      },
    })
  })
