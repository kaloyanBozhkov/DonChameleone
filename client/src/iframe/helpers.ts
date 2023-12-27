import useParentSession from '@/store/useParentSession'

/** Helps skip a useless render for the initial authed state */
export const initializeUserSession = () => {
  try {
    if (!window.location.search) return

    const s = window.location.search.split('initialUserSession=')
    if (!s) return

    const initialUserSession = s[0]
    if (!initialUserSession) return

    useParentSession.getState().controls.setUser(JSON.parse(initialUserSession))
  } catch (err) {
    console.warn('Failed to get initial user session')
  }
}
