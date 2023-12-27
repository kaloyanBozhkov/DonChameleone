import { type MutableRefObject, useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

import { IFRAME_ORIGIN } from '@/iframe/helpers'
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
    const hashParts = hash.split('?'),
      hashPath = hashParts[0],
      search = new URLSearchParams(hashParts[1])

    search.delete('initial')
    search.append('initial', 'true')

    const searchParams = search.toString()

    iframeRef.current.src = `${IFRAME_ORIGIN}#${hashPath}${searchParams ? `?${searchParams}` : ''}`
  }, [])

  useEffect(() => {
    if (iframePathname === null || !iframeRef.current) return
    const pathParts = iframePathname.split('?'),
      search = new URLSearchParams(pathParts[1])

    search.delete('initial')
    const searchParams = search.toString()

    window.location.hash = `#${pathParts[0]}${searchParams ? `?${searchParams}` : searchParams}`
  }, [iframePathname])
}

export default useLocationHash
