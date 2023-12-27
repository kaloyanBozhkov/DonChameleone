import useParentSession from '@/store/useParentSession'

/** Helps skip a useless render for the initial authed state */
export const initializeUserSession = () => {
  try {
    if (!window.location.search) return

    const query = new URLSearchParams(window.location.search)
    if (!query.has('initialUserSession')) return

    const initialUserSession = query.get('initialUserSession')
    if (!initialUserSession) return

    useParentSession.getState().controls.setUser(JSON.parse(initialUserSession))
  } catch (err) {
    console.warn('Failed to get initial user session')
  }
}
