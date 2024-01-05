import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import env from '@/env'

type PlayerSession = {
  player: {
    id: string
    name: string
    cardPackIds: string[]
  } | null
  controls: {
    setupPlayer: (p: PlayerSession['player']) => void
  }
}

const usePlayer = create<PlayerSession>((set) => ({
  player: null,
  controls: {
    setupPlayer: (player) => set({ player }),
  },
}))

export default usePlayer

if (env.VERCEL_ENV === 'development') mountStoreDevtool('usePlayer', usePlayer)
