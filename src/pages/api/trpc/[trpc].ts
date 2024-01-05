import { appRouter } from '@/server/api/root'
import { createTRPCContext } from '@/server/context'

import type { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env'
import { createNextApiHandler } from '@trpc/server/adapters/next'

// export API handler
const nextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  batching: {
    enabled: true,
  },
  onError:
    env.VERCEL_ENV === 'development'
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`)
        }
      : undefined,
})

// enable iframe to perform cors requests within parent window - should only matter if locally running due to port change
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (env.VERCEL_ENV === 'development')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Referrer-Policy', 'no-referrer')

  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    return res.end()
  }

  return nextApiHandler(req, res)
}
