import { create } from 'zustand'

type IframeStore = {
  pathname: string | null
  controls: {
    updateLocation: (pathname: string) => void
  }
}

export const useIframeStore = create<IframeStore>((set) => ({
  pathname: null,
  controls: {
    updateLocation: (pathname) =>
      set({
        pathname,
      }),
  },
}))
