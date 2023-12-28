import { createTRPCRouter } from '@/server/api/trpc'

import { lobbyRouter } from './routers/lobby/lobby.router'
import { questionRouter } from './routers/question/question.router'
import { roomRouter } from './routers/room/room.router'

export const appRouter = createTRPCRouter({
  room: roomRouter,
  question: questionRouter,
  lobby: lobbyRouter,
})

export type AppRouter = typeof appRouter
