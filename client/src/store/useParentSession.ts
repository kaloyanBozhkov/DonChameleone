import { create } from 'zustand'

type ISessionParent = {
  user: IUser
  controls: {
    setUser: (u: ISessionParent['user']) => void
  }
}

export default create<ISessionParent>((set) => ({
  user: null,
  controls: {
    setUser: (user) => set({ user }),
  },
}))
