import { config } from 'dotenv'
import * as z from 'zod'

config({ path: '../.env' })

const envBESchema = z.object({
  SERVER_PORT: z.string(),
})

const envBE = envBESchema.parse({
  SERVER_PORT: process.env.SERVER_PORT,
})

export default envBE
