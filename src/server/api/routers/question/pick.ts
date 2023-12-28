import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'

import { isAtPhase } from '../../common'

export const pick = protectedProcedure
  .input(z.object({ cardPackId: z.string().uuid(), roomId: z.string().uuid(), q: z.string() }))
  .query(async ({ ctx: { prisma }, input: { cardPackId, roomId, q } }) => {
    await isAtPhase(prisma, GAME_PHASE.QUESTION_TIME, roomId)
    await prisma.room.update({
      where: {
        id: roomId,
        cardPackId,
      },
      data: {
        roundQuestion: q,
      },
    })
  })
