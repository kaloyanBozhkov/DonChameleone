import { create } from 'zustand'

type ISessionParent = {
  user: IUser
  hydrated: boolean
  controls: {
    setUser: (u: ISessionParent['user']) => void
  }
}

export default create<ISessionParent>((set) => ({
  user: null,
  hydrated: false,
  controls: {
    setUser: (user) => set({ user, hydrated: true }),
  },
}))
