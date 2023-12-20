import { HashRouter, Route } from 'react-router-dom'

import PageTransition from './components/layouts/PageTransition.layout'
import IndexPage from './pages/Index.page'
import RuleBookPage from './pages/RuleBook.page'

export default function App() {
  return (
    <HashRouter basename="/">
      <PageTransition>
        <Route path="/" Component={IndexPage} />
        <Route path="/rules" Component={RuleBookPage} />
      </PageTransition>
    </HashRouter>
  )
}
