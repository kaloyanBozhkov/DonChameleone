import { inferAsyncReturnType } from '@trpc/server'
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

export async function createContext({ req, res }: CreateExpressContextOptions) {
  const session = {}
  return { session, req, res }
}

export type Context = inferAsyncReturnType<typeof createContext>
