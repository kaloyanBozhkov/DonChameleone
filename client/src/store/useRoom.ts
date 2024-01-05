import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import env from '@/env'

type Room = {
  room: {
    id: string
    name: string
  } | null
  controls: {
    setRoom: (id: string, name: string) => void
  }
}

const useRoom = create<Room>((set) => ({
  room: null,
  controls: {
    setRoom: (id, name) =>
      set({
        room: {
          id,
          name,
        },
      }),
  },
}))

export default useRoom

if (env.VERCEL_ENV === 'development') mountStoreDevtool('useRoom', useRoom)
