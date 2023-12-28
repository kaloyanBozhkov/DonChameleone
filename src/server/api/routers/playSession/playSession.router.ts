import { createTRPCRouter } from '@/server/api/trpc'

import { getPlayers } from './getPlayers'
import { markReady } from './markReady'
import { readyCheck } from './readyCheck'
import { vote } from './vote'
import { votesCount } from './votesCount'

export const lobbyRouter = createTRPCRouter({
  readyCheck,
  markReady,
  vote,
  getPlayers,
  votesCount,
})
