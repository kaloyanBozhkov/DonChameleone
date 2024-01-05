import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import env from '@/env'

type GameConfig = {
  sound: boolean
  controls: {
    toggleSound: () => void
  }
}

const useGameConfig = create<GameConfig>((set) => ({
  sound: true,
  controls: {
    toggleSound: () => set((prev) => ({ sound: !prev.sound })),
  },
}))

export default useGameConfig

if (env.VERCEL_ENV === 'development') mountStoreDevtool('useGameConfig', useGameConfig)
