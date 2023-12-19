import { ReactNode } from 'react'

import { Routes } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>{children}</Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default PageTransition
