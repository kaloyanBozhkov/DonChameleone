import env from '@/env'

export const getBaseUrl = () => {
  if (env.VERCEL_ENV !== 'development')
    return env.SERVER_DOMAIN_PUBLIC.includes('http')
      ? env.SERVER_DOMAIN_PUBLIC
      : `https://${env.SERVER_DOMAIN_PUBLIC}`

  return `http://localhost:${env.SERVER_PORT_FE_PUBLIC ?? 3000}`
}
