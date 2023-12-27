import { useEffect } from 'react'

import { useSession } from 'next-auth/react'

import type { OutMessage } from './useIframeControls'

export default function useSessionSync({
  sendEvent,
}: {
  sendEvent: (dataToSend: OutMessage) => void
}) {
  const session = useSession()

  useEffect(() => {
    const id = setTimeout(() => {
      sendEvent({
        action: 'receiveSessionUpdate',
        payload: {
          user: getUserObjFromSession(session),
        },
      })
    }, 1000)

    return () => clearTimeout(id)
  }, [session])
}

export const getUserObjFromSession = (session: Pick<ReturnType<typeof useSession>, 'data'>) =>
  session.data
    ? ({
        name: session.data.user.name ?? session.data.user.email!,
        email: session.data.user.email!,
        id: session.data.user.id,
      } as IUser)
    : null
