import { type MutableRefObject } from 'react'

import { signIn, signOut } from 'next-auth/react'

import { env } from '@/env'
import { useIframeStore } from '@/store/useIframeStore'

export type Message =
  | { action: 'signOut' }
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
          return void signIn('email', {
            email: message.payload.email,
            callbackUrl: '/#/play',
            redirect: false,
          }).finally(() => {
            if (!iframeRef.current?.contentWindow) return

            const path = new URL(iframeRef.current.src),
              hash = `#/auth/email-verify/${message.payload.email}`

            iframeRef.current.src = `${path.origin}/${hash}`
            window.location.hash = hash
          })
        case 'signInFacebook':
          return void signIn('facebook', {
            callbackUrl: '/#/play',
          })
        case 'signInGoogle':
          return void signIn('google', {
            callbackUrl: '/#/play',
          })
        case 'sendLocationUpdate': {
          return useIframeStore.getState().controls.updateLocation(message.payload.pathname)
        }
        case 'signOut': {
          return void signOut({ callbackUrl: '/#/play' })
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
