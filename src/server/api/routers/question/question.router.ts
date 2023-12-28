import { createTRPCRouter } from '@/server/api/trpc'

import { draw } from './draw'
import { pick } from './pick'

export const questionRouter = createTRPCRouter({
  draw,
  pick,
})
