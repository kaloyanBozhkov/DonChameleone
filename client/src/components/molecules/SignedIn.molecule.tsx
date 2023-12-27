import { ReactNode } from 'react'

import useParentSession from '@/store/useParentSession'

const SignedIn = ({ children }: { children: ReactNode }) => {
  const signedIn = useParentSession(({ user }) => user !== null)
  if (signedIn) return children
  return null
}

export default SignedIn
