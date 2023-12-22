import { type Context } from './context'
import SuperJSON from 'superjson'

import { initTRPC } from '@trpc/server'

export const {
  router,
  middleware,
  procedure: publicProcedure,
} = initTRPC.context<Context>().create({
  transformer: SuperJSON,
})
