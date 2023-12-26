import { useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'

import { messageSystem } from '@/iframe/messageSystem'

const useParentLocationSync = () => {
  const loc = useLocation()

  useEffect(() => {
    messageSystem({ action: 'sendLocationUpdate', payload: { pathname: loc.pathname } })
  }, [loc])
}

export default useParentLocationSync
