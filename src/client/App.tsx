import { useLayoutEffect } from 'react'

import { HashRouter, Navigate, Route } from 'react-router-dom'

import { SignedIn, SignedOut } from '@clerk/clerk-react'

import PageTransition from './components/layouts/PageTransition.layout'
import AboutPage from './pages/About.page'
import AuthPage from './pages/Auth.page'
import IndexPage from './pages/Index.page'
import RoomOptionPage from './pages/RoomOption.page'
import RuleBookPage from './pages/RuleBook.page'
import RulesPage from './pages/RulesPage'

export default function App() {
  useLayoutEffect(() => {
    // clear initial styles of empty page
    document.querySelector('body.empty')?.setAttribute('class', '')
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
      </PageTransition>
    </HashRouter>
  )
}
