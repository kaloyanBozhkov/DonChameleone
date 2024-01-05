import SuperJSON from 'superjson'

import env from '@/env'
import { QueryClient } from '@tanstack/react-query'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

import type { AppRouter } from '~/api/root'

export const trpc = createTRPCReact<AppRouter>({ abortOnUnmount: true })

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${env.NEXT_PUBLIC_DOMAIN}/api/trpc`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          // allow iframe to include credentials of parent window (next-auth session)
          credentials: 'include',
        })
      },
    }),
  ],
  transformer: SuperJSON,
})

export const queryClient = new QueryClient()
