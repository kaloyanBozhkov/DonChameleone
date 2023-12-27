import { env } from '@/env'

export const IFRAME_ORIGIN =
  env.NEXT_PUBLIC_VERCEL_ENV === 'development'
    ? 'http://localhost:8080'
    : '/dist/client/don-game.html'
