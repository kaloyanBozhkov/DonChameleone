import * as z from 'zod'

const envSchema = z.object({
  CLERK_PUBLISHABLE_KEY: z.string(),
})

const env = envSchema.parse({
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
})

export default env
