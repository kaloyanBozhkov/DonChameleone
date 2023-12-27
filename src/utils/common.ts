import { env } from '@/env'

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''
  if (env.NEXT_PUBLIC_DOMAIN) return `https://${env.NEXT_PUBLIC_DOMAIN}`
  return 'http://localhost:3000'
}
