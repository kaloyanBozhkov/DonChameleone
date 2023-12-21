import * as z from 'zod'

const envFESchema = z.object({
  PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
})

const envFE = envFESchema.parse({
  PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
})

export default envFE
