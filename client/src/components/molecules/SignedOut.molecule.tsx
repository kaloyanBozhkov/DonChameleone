import { ReactNode } from 'react'

import useParentSession from '@/store/useParentSession'

const SignedOut = ({ children }: { children: ReactNode }) => {
  const signedIn = useParentSession(({ user }) => user !== null),
    hydrated = useParentSession(({ hydrated }) => hydrated)

  if (!hydrated) return null
  if (signedIn) return null
  return children
}

export default SignedOut
