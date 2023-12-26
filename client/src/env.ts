import * as z from 'zod'

const envFESchema = z.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  NEXT_PUBLIC_DOMAIN: z.string(),
  VERCEL_ENV: z.string().optional(),
})

const env = envFESchema.parse({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  VERCEL_ENV: process.env.VERCEL_ENV,
})

export default env
