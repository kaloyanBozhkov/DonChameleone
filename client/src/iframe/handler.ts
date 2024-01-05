import env from '@/env'
import useParentSession from '@/store/useParentSession'

import { OutMessage } from '-/src/hooks/client/useIframeControls'

export const iframeHandler = () => {
  function handleMessage(event: MessageEvent) {
    if (event.origin === env.NEXT_PUBLIC_DOMAIN || env.VERCEL_ENV === 'development') {
      const message = event.data as OutMessage

      if (message.action) console.log('Message from parent iframe:', message)

      switch (message.action) {
        case 'receiveSessionUpdate': {
          return useParentSession.getState().controls.setUser(message.payload.user)
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
