import { appRouter } from '@/server/api/root'
import { createTRPCContext } from '@/server/context'

import { env } from '@/env'
import { createNextApiHandler } from '@trpc/server/adapters/next'

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.VERCEL_ENV === 'development'
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`)
        }
      : undefined,
})
