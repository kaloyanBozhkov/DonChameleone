import { useCallback, useEffect, useRef } from 'react'

import { iframeHandler } from '@/iframe/handler'
import { IFRAME_ORIGIN } from '@/iframe/helpers'

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
      iframeRef.current.contentWindow!.postMessage(dataToSend, IFRAME_ORIGIN)
    }, [])

  // handle events
  useEffect(() => iframeHandler(iframeRef), [])

  return { sendEvent, iframeRef }
}
