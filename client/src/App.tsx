import { useLayoutEffect } from 'react'

import { HashRouter, Navigate, Route } from 'react-router-dom'

import PageTransition from './components/layouts/PageTransition.layout'
import SignedIn from './components/molecules/SignedIn.molecule'
import SignedOut from './components/molecules/SignedOut.molecule'
import Authed from './components/route/Authed.route'
import InRoom from './components/route/InRoom.route'
import { iframeHandler } from './iframe/handler'
import AboutPage from './pages/About.page'
import AuthPage from './pages/Auth.page'
import EmailVerifyPage from './pages/EmailVerify.page'
import IndexPage from './pages/Index.page'
import InviteFriendsPage from './pages/InviteFriends.page'
import JoinRoomPage from './pages/JoinRoom.page'
import LobbyPage from './pages/Lobby.page'
import RoomOptionPage from './pages/RoomOption.page'
import RuleBookPage from './pages/RuleBook.page'
import RulesPage from './pages/Rules.page'
import SelectThemePage from './pages/SelectTheme.page'

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
              <Authed>
                <RoomOptionPage />
              </Authed>
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
              <Authed>
                <JoinRoomPage />
              </Authed>
            )
          }}
        />
        <Route
          path="/create"
          Component={() => {
            return (
              <Authed>
                <SelectThemePage />
              </Authed>
            )
          }}
        />
        <Route
          path="/invite"
          Component={() => {
            return (
              <Authed>
                <InRoom>
                  <InviteFriendsPage />
                </InRoom>
              </Authed>
            )
          }}
        />
        <Route
          path="/lobby"
          Component={() => {
            return (
              <Authed>
                <InRoom>
                  <LobbyPage />
                </InRoom>
              </Authed>
            )
          }}
        />
      </PageTransition>
    </HashRouter>
  )
}

export default App
