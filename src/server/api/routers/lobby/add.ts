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

    await prisma.room.update({
      where: { id: roomId },
      data: {
        players: {
          create: {
            userId: session.user.id,
            order: order + 1,
            isPlaying: phase === GAME_PHASE.LOBBY,
          },
        },
      },
      select: null,
    })
  })
