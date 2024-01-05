import { type ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import SignedIn from '../molecules/SignedIn.molecule'
import SignedOut from '../molecules/SignedOut.molecule'

const Authed = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/auth" />
      </SignedOut>
    </>
  )
}

export default Authed
