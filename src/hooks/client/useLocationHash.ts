import { type MutableRefObject, useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

import { useIframeStore } from '@/store/useIframeStore'

const useLocationHash = ({
  iframeRef,
}: {
  iframeRef: MutableRefObject<HTMLIFrameElement | null>
}) => {
  const router = useRouter(),
    iframePathname = useIframeStore(({ pathname }) => pathname),
    gate = useRef(false)

  // set initial path
  useEffect(() => {
    if (gate.current) return
    gate.current = true
    const hash = router.asPath.split('#')[1] ?? ''
    if (!hash || !iframeRef.current) return
    const path = new URL(iframeRef.current.src)
    iframeRef.current.src = `${path.origin}#${hash}`
  }, [])

  useEffect(() => {
    if (iframePathname === null || !iframeRef.current) return
    window.location.hash = `#${iframePathname}`
  }, [iframePathname])
}

export default useLocationHash
