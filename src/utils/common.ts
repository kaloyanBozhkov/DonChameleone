export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''
  if (process.env.NEXT_PUBLIC_DOMAIN) return `https://${process.env.NEXT_PUBLIC_DOMAIN}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}
