import React from 'react'

import { createRoot } from 'react-dom/client'

import env from '@/env'
import { queryClient, trpc, trpcClient } from '@/utils/api'
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import './styles/fonts.css'
import './styles/tailwind.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw Error('Missing root element on page')

const root = createRoot(rootEl)
root.render(
  // <React.StrictMode>
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </trpc.Provider>
    </ClerkProvider>
  // </React.StrictMode>
)


