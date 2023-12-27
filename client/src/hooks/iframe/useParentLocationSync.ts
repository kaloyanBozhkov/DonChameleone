import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { messageSystem } from '@/iframe/messageSystem'

const useParentLocationSync = () => {
  const loc = useLocation()

  useEffect(() => {
    messageSystem({
      action: 'sendLocationUpdate',
      payload: { pathname: `${loc.pathname}${loc.search}` },
    })
  }, [loc])
}

export default useParentLocationSync
