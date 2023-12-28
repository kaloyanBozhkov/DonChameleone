import { createTRPCRouter } from '@/server/api/trpc'

import { add } from './add'
import { get } from './get'
import { order } from './order'
import { remove } from './remove'

export const lobbyRouter = createTRPCRouter({
  get,
  add,
  order,
  remove,
})
