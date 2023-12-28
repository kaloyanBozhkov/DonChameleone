import type { GAME_PHASE, PrismaClient } from '@prisma/client'
import { TRPCError } from '@trpc/server'

export const isCardPackOwner = (prisma: PrismaClient, userId: string, cardPackId: string) =>
  prisma.ownership.findFirstOrThrow({
    where: {
      userId,
      cardPacks: {
        some: {
          id: cardPackId,
        },
      },
    },
    select: null,
  })

export const isGameOwner = (prisma: PrismaClient, userId: string, roomId: string) =>
  prisma.room.findFirstOrThrow({
    where: {
      id: roomId,
      players: {
        some: {
          isOwner: true,
          userId,
        },
      },
    },
  })

export const isAtPhase = async (prisma: PrismaClient, atPase: GAME_PHASE, roomId: string) => {
  const { phase } = await prisma.room.findFirstOrThrow({
    where: {
      id: roomId,
    },
    select: {
      phase: true,
    },
  })

  if (phase !== atPase)
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: `Cannot perform operation during ${phase} phase`,
    })
}
