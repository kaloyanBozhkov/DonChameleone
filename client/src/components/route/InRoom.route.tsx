import { type ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import usePlayer from '@/store/usePlayer'
import useRoom from '@/store/useRoom'

const InRoom = ({ children }: { children: ReactNode }) => {
  const player = usePlayer(({ player }) => !!player),
    room = useRoom(({ room }) => !!room)

  if (player && room) return children

  return <Navigate to="/play" />
}

export default InRoom
