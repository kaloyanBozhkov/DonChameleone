import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'

import { isAtPhase, isGameOwner } from '../../common'

export const order = protectedProcedure
  .input(
    z.object({
      roomId: z.string().uuid(),
      fromUserId: z.string().uuid(),
      toUserId: z.string().uuid(),
    })
  )
  .mutation(async ({ ctx: { prisma, session }, input: { roomId, fromUserId, toUserId } }) => {
    await isGameOwner(prisma, session.user.id, roomId)
    await isAtPhase(prisma, GAME_PHASE.LOBBY, roomId)

    const orderFirstUser = await prisma.playSession.findFirstOrThrow({
        where: { roomId, userId: fromUserId },
        select: {
          order: true,
        },
      }),
      orderSecondUser = await prisma.playSession.findFirstOrThrow({
        where: { roomId, userId: toUserId },
        select: {
          order: true,
        },
      })

    await prisma.playSession.updateMany({
      where: {
        userId: fromUserId,
        roomId,
      },
      data: {
        order: orderSecondUser.order,
      },
    })

    await prisma.playSession.updateMany({
      where: {
        userId: toUserId,
        roomId,
      },
      data: {
        order: orderFirstUser.order,
      },
    })
  })
