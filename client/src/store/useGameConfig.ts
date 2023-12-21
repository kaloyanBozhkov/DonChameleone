import { create } from 'zustand'

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
