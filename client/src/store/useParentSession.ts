import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import env from '@/env'

type ISessionParent = {
  user: IUser
  hydrated: boolean
  controls: {
    setUser: (u: ISessionParent['user']) => void
  }
}

const useParentSession = create<ISessionParent>((set) => ({
  user: null,
  hydrated: false,
  controls: {
    setUser: (user) => set({ user, hydrated: true }),
  },
}))

export default useParentSession

if (env.VERCEL_ENV === 'development') mountStoreDevtool('useParentSession', useParentSession)
