import { useLayoutEffect } from 'react'

import { HashRouter, Route } from 'react-router-dom'

import PageTransition from './components/layouts/PageTransition.layout'
import AboutPage from './pages/About.page'
import IndexPage from './pages/Index.page'
import RuleBookPage from './pages/RuleBook.page'

export default function App() {
  useLayoutEffect(() => {
    // clear initial styles of empty page
    document.querySelector('body.empty')?.setAttribute('class', '')
  }, [])

  return (
    <HashRouter basename="/">
      <PageTransition>
        <Route path="/" Component={IndexPage} />
        <Route path="/rules" Component={RuleBookPage} />
        <Route path="/about" Component={AboutPage} />
      </PageTransition>
    </HashRouter>
  )
}
