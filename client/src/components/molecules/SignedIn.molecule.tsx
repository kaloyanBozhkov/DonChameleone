import { ReactNode, useEffect, useRef } from 'react'

import useParentSession from '@/store/useParentSession'
import usePlayer from '@/store/usePlayer'
import { trpc } from '@/utils/api'

const SignedIn = ({ children }: { children: ReactNode }) => {
  const signedIn = useParentSession(({ user }) => user !== null),
    user = useParentSession(({ user }) => user),
    hydrated = useParentSession(({ hydrated }) => hydrated),
    setup = useRef(false),
    setupPlayer = usePlayer(({ controls: { setupPlayer } }) => setupPlayer),
    isSetPlayer = usePlayer(({ player }) => player !== null),
    { refetch } = trpc.playerSession.getMainPlayer.useQuery(undefined, { enabled: false })

  // setup user data on authed
  useEffect(() => {
    if (isSetPlayer) return
    void (async () => {
      const resp = await refetch()
      if (!resp.isSuccess) return
      setupPlayer(resp.data)
    })()
    setup.current = true
  }, [user, isSetPlayer])

  if (!hydrated) return null

  if (signedIn && isSetPlayer) return children

  return null
}

export default SignedIn
