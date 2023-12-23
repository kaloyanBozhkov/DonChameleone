import * as z from 'zod'

const envFESchema = z.object({
  PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  SERVER_DOMAIN_PUBLIC: z.string(),
  DOMAIN_PUBLIC: z.string(),
  VERCEL_ENV: z.string().optional(),
  SERVER_PORT_FE_PUBLIC: z.string(),
})

const envFE = envFESchema.parse({
  PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
  SERVER_DOMAIN_PUBLIC: process.env.SERVER_DOMAIN_PUBLIC,
  DOMAIN_PUBLIC: process.env.DOMAIN_PUBLIC,
  VERCEL_ENV: process.env.VEREL_ENV,
  SERVER_PORT_FE_PUBLIC: process.env.SERVER_PORT_FE_PUBLIC,
})

export default envFE
