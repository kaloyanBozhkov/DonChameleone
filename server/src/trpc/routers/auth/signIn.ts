import { z } from 'zod'
import { prisma } from '~/trpc/prisma'
import { publicProcedure } from '~/trpc/trpc'

export const signIn = publicProcedure
  .input(z.object({ prompt: z.string() }))
  .query(async ({ input: { prompt } }) => {
    console.log(typeof prisma)

    return { ok: 'world' }
  })
