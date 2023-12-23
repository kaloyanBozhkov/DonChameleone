import SuperJSON from 'superjson'

import env from '@/env'
import { QueryClient } from '@tanstack/react-query'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

import type { AppRouter } from '~/api/root'

export const trpc = createTRPCReact<AppRouter>({ abortOnUnmount: true })

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${env.SERVER_DOMAIN_PUBLIC}/api/trpc`,
      async headers() {
        return {
          //   authorization: getAuthCookie(),
        }
      },
    }),
  ],
  transformer: SuperJSON,
})

export const queryClient = new QueryClient()
