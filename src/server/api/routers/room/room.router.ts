import { createTRPCRouter } from '@/server/api/trpc'

import { create } from './create'
import { get } from './get'
import { nextPhase } from './nextPhase'

export const roomRouter = createTRPCRouter({
  get,
  create,
  nextPhase,
})
