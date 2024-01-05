import { createTRPCRouter } from '@/server/api/trpc'

import { cardPackRouter } from './routers/cardPack/cardPack.router'
import { lobbyRouter } from './routers/lobby/lobby.router'
import { playSessionRouter } from './routers/playSession/playSession.router'
import { questionRouter } from './routers/question/question.router'
import { roomRouter } from './routers/room/room.router'

export const appRouter = createTRPCRouter({
  room: roomRouter,
  question: questionRouter,
  lobby: lobbyRouter,
  playerSession: playSessionRouter,
  cardPack: cardPackRouter,
})

export type AppRouter = typeof appRouter
