import { ReactNode } from 'react'

import useParentSession from '@/store/useParentSession'

const SignedOut = ({ children }: { children: ReactNode }) => {
  const signedIn = useParentSession(({ user }) => user !== null)
  if (signedIn) return null
  return children
}

export default SignedOut
