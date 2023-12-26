import { type MutableRefObject } from 'react'

import { signIn } from 'next-auth/react'

import { env } from '@/env'
import { useIframeStore } from '@/store/useIframeStore'

export type Message =
  | { action: 'signInGoogle' }
  | { action: 'signInFacebook' }
  | { action: 'signInEmail'; payload: { email: string } }
  | {
      action: 'sendLocationUpdate'
      payload: { pathname: string }
    }

export const iframeHandler = (iframeRef: MutableRefObject<HTMLIFrameElement | null>) => {
  function handleMessage(event: MessageEvent) {
    if (!iframeRef.current) {
      console.warn('iframeRef not set yet')
      return
    }

    if (event.origin === env.NEXT_PUBLIC_DOMAIN || env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
      const message = event.data as Message

      // Do something with the data received from the iframe
      if (message.action) console.log('Message from child iframe:', message)

      switch (message.action) {
        case 'signInEmail':
          return void signIn('email', { email: message.payload.email })
        case 'signInFacebook':
          return void signIn('facebook')
        case 'signInGoogle':
          return void signIn('google')
        case 'sendLocationUpdate': {
          return useIframeStore.getState().controls.updateLocation(message.payload.pathname)
        }
        default:
          return
      }
    }
  }

  // Add an event listener for messages
  window.addEventListener('message', handleMessage)

  return () => window.removeEventListener('message', handleMessage)
}
