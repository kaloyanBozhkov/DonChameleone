import React from 'react'

import { createRoot } from 'react-dom/client'

import env from '@/env'
import { ClerkProvider } from '@clerk/clerk-react'

import App from './App'
import './styles/fonts.css'
import './styles/tailwind.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw Error('Missing root element on page')

const root = createRoot(rootEl)
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
)
