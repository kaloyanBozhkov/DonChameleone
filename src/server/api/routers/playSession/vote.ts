import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

export const vote = protectedProcedure
  .input(z.object({ vote: z.boolean() }))
  .mutation(async ({ ctx: { prisma }, input: { prompt } }) => {})
