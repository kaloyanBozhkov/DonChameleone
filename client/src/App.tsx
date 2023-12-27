import { useLayoutEffect } from 'react'

import { useParams } from 'next/navigation'
import { HashRouter, Navigate, Route } from 'react-router-dom'

import PageTransition from './components/layouts/PageTransition.layout'
import SignedIn from './components/molecules/SignedIn.molecule'
import SignedOut from './components/molecules/SignedOut.molecule'
import { iframeHandler } from './iframe/handler'
import AboutPage from './pages/About.page'
import AuthPage from './pages/Auth.page'
import EmailVerifyPage from './pages/EmailVerify.page'
import IndexPage from './pages/Index.page'
import InviteFriendsPage from './pages/InviteFriends.page'
import JoinRoomPage from './pages/JoinRoom.page'
import RoomOptionPage from './pages/RoomOption.page'
import RuleBookPage from './pages/RuleBook.page'
import RulesPage from './pages/Rules.page'

const App = () => {
  useLayoutEffect(iframeHandler, [])

  useLayoutEffect(() => {
    // clear initial styles of empty page
    const id = setTimeout(() => {
      document.querySelector('body.empty')?.setAttribute('class', '')
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  return (
    <HashRouter basename="/">
      <PageTransition>
        <Route path="/" Component={IndexPage} />
        <Route path="/rules">
          <Route path="/rules" Component={RuleBookPage} />
          <Route path="/rules/basic" Component={() => <RulesPage rules="basic" />} />
          <Route path="/rules/1v1" Component={() => <RulesPage rules="1v1" />} />
          <Route path="/rules/gameplay" Component={() => <RulesPage rules="gameplay" />} />
        </Route>
        <Route
          path="/play"
          Component={() => {
            return (
              <>
                <SignedIn>
                  <RoomOptionPage />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/auth" />
                </SignedOut>
              </>
            )
          }}
        />
        <Route path="/about" Component={AboutPage} />
        <Route
          path="/auth"
          Component={() => {
            return (
              <>
                <SignedIn>
                  <Navigate to="/play" />
                </SignedIn>
                <SignedOut>
                  <AuthPage />
                </SignedOut>
              </>
            )
          }}
        />
        <Route
          path="/auth/email-verify/:email"
          Component={() => {
            return (
              <>
                <SignedIn>
                  <Navigate to="/play" />
                </SignedIn>
                <SignedOut>
                  <EmailVerifyPage />
                </SignedOut>
              </>
            )
          }}
        />
        <Route
          path="/join"
          Component={() => {
            return (
              <>
                <SignedIn>
                  <JoinRoomPage />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/auth" />
                </SignedOut>
              </>
            )
          }}
        />
        <Route
          path="/create"
          Component={() => {
            return (
              <>
                <SignedIn>
                  {/* add card pack select page */}
                  <Navigate to="/invite" />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/auth" />
                </SignedOut>
              </>
            )
          }}
        />
        <Route
          path="/invite"
          Component={() => {
            return (
              <>
                <SignedIn>
                  <InviteFriendsPage />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/auth" />
                </SignedOut>
              </>
            )
          }}
        />
      </PageTransition>
    </HashRouter>
  )
}

export default App
