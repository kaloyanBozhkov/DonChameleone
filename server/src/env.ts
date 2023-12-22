import { config } from 'dotenv'
import * as z from 'zod'

config({ path: '../.env' })

const envBESchema = z.object({
  SERVER_PORT_BE: z.string(),
  VERCEL_ENV: z.string(),
  SERVER_DOMAIN_PUBLIC: z.string(),
})

const env = envBESchema.parse({
  SERVER_PORT_BE: process.env.SERVER_PORT_BE,
  VERCEL_ENV: process.env.VERCEL_ENV,
  SERVER_DOMAIN_PUBLIC: process.env.SERVER_DOMAIN_PUBLIC,
})

export default env
