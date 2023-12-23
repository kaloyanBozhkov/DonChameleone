import { getServerAuthSession } from '@/server/auth'
import { prisma } from '@/server/prisma'

import { type Session } from 'next-auth'

import { type CreateNextContextOptions } from '@trpc/server/adapters/next'

interface CreateContextOptions {
  session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  }
}

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res })

  return createInnerTRPCContext({
    session,
  })
}
