import env from '@/env'

export const getBaseUrl = () => {
  if (env.VERCEL_ENV !== 'development')
    return env.NEXT_PUBLIC_DOMAIN.includes('http')
      ? env.NEXT_PUBLIC_DOMAIN
      : `https://${env.SERVER_NEXT_PUBLIC_DOMAIN}`

  return `http://localhost:${env.SERVER_PORT_FE_PUBLIC ?? 3000}`
}
