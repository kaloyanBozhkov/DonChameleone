import React from 'react'

import { createRoot } from 'react-dom/client'

import { queryClient, trpc, trpcClient } from '@/utils/api'
import { QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import { initializeUserSession } from './iframe/helpers'
import './styles/fonts.css'
import './styles/tailwind.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw Error('Missing root element on page')

// set initial user session
initializeUserSession()

const root = createRoot(rootEl)
root.render(
  // <React.StrictMode>
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>
  // </React.StrictMode>
)
