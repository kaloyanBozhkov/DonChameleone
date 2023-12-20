import { BrowserRouter, Route } from 'react-router-dom'

import AppLayout from './components/layouts/App.layout'
import PageTransition from './components/layouts/PageTransition.layout'
import IndexPage from './pages/Index.page'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <PageTransition>
        <Route path="/" Component={IndexPage} />
      </PageTransition>
    </BrowserRouter>
  )
}
