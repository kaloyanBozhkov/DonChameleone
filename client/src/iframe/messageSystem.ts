import env from '@/env'

import type { Message } from '-/src/iframe/handler'

export const messageSystem = (dataToSend: Message) => {
  const parent = window.parent
  parent.postMessage(
    dataToSend,
    env.VERCEL_ENV === 'development' ? 'http://localhost:3000' : env.NEXT_PUBLIC_DOMAIN
  )
}
