import { createContext } from './context'
import { appRouter } from './routers/_app'

import * as trpcExpress from '@trpc/server/adapters/express'

export default trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
  batching: {
    enabled: true,
  },
  onError({ ctx, path, error }) {
    console.log({ error })
    console.log({ path })
    console.log({ ctx })
  },
})
