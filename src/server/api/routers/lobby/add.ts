import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'

export const add = protectedProcedure
  .input(z.object({ roomId: z.string().uuid() }))
  .mutation(async ({ ctx: { prisma, session }, input: { roomId } }) => {
    const { phase } = await prisma.room.findUniqueOrThrow({
        where: { id: roomId },
        select: { phase: true },
      }),
      order = await prisma.playSession.count({ where: { roomId } })

    await prisma.playSession.upsert({
      where: { userId: session.user.id, roomId },
      update: {},
      create: {
        userId: session.user.id,
        roomId,
        order: order + 1,
        isPlaying: phase === GAME_PHASE.LOBBY,
      },
      select: null,
    })
  })
