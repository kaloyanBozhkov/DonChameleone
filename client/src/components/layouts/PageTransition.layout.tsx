import { ReactNode, useLayoutEffect, useRef, useState } from 'react'

import { Routes } from 'react-router'
import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { getRandomItem } from '@/helpers/utils'

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation(),
    prevLocation = useRef<string | undefined>(),
    transition = useRef<Transitions>('top'),
    prevTransition = useRef<Transitions | undefined>(),
    [animation, setAnimation] = useState(getAnimation(transition.current)),
    [skipTransition, setSkpTransition] = useState(false)

  useLayoutEffect(() => {
    if (prevLocation.current === location.pathname) return
    prevLocation.current = location.pathname

    const availableTransitions = PAGE_TRANSITION_DIRECTIONS.filter(
      (dir) => ![transition.current, prevTransition.current].includes(dir)
    )

    // @TODO next line might be useless
    prevTransition.current = transition.current
    transition.current = getRandomItem(availableTransitions) ?? 'bottom'

    setAnimation(getAnimation(transition.current))
  }, [location.pathname])

  useLayoutEffect(() => {
    const query = new URLSearchParams(location.search)
    if (!query.has('initial') || !query.get('initial')) return
    query.delete('initial')
    const newQ = query.toString()
    const newUrl = `${window.location.pathname}${newQ && `?${newQ}`}`
    console.log(newUrl)
    window.history.replaceState({}, document.title, newUrl)

    setSkpTransition(true)
    const id = setTimeout(() => setSkpTransition(false), 750)

    return () => {
      setSkpTransition(false)
      clearTimeout(id)
    }
  }, [location])

  return (
    <div className="relative h-full w-full">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={
            skipTransition
              ? undefined
              : {
                  enter: animation.in,
                  exit: animation.out,
                }
          }
          timeout={skipTransition ? 0 : 700}
        >
          <Routes location={location}>{children}</Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default PageTransition

const PAGE_TRANSITION_DIRECTIONS = ['left', 'right', 'top', 'bottom'] as const
type Transitions = (typeof PAGE_TRANSITION_DIRECTIONS)[number]

const getAnimation = (dir: Transitions) => {
  switch (dir) {
    case 'bottom':
      return {
        in: 'animate-[in-bottom_700ms_linear_forwards]',
        out: 'animate-[out-top_700ms_linear_forwards]',
      }
    case 'top':
      return {
        in: 'animate-[in-top_700ms_linear_forwards]',
        out: 'animate-[out-bottom_700ms_linear_forwards]',
      }
    case 'left':
      return {
        in: 'animate-[in-left_700ms_linear_forwards]',
        out: 'animate-[out-right_700ms_linear_forwards]',
      }
    case 'right':
      return {
        in: 'animate-[in-right_700ms_linear_forwards]',
        out: 'animate-[out-left_700ms_linear_forwards]',
      }
    default:
      return {
        in: 'animate-[in-bottom_700ms_linear_forwards]',
        out: 'animate-[out-top_700ms_linear_forwards]',
      }
  }
}
