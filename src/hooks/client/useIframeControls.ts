import { useCallback, useEffect, useRef } from 'react'

import { env } from '@/env'
import { iframeHandler } from '@/iframe/handler'

export type OutMessage =
  | {
      action: 'receiveLocationUpdate'
      payload: { hash: string }
    }
  | {
      action: 'receiveSessionUpdate'
      payload: {
        user: IUser
      }
    }

export default function useIframeControls() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null),
    sendEvent = useCallback((dataToSend: OutMessage) => {
      if (!iframeRef.current) return
      iframeRef.current.contentWindow!.postMessage(
        dataToSend,
        env.NEXT_PUBLIC_VERCEL_ENV === 'development'
          ? 'http://localhost:8080'
          : env.NEXT_PUBLIC_DOMAIN
      )
    }, [])

  // handle events
  useEffect(() => iframeHandler(iframeRef), [])

  return { sendEvent, iframeRef }
}
