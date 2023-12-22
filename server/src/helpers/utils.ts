import { Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'
import env from '~/env'

export const geenricHandler = async <T>(
  res: Response,
  promise: () => Promise<T>,
  superJSON = true,
  respStatus = 200
) => {
  try {
    const data = await promise()
    res.status(respStatus).json(superJSON ? SuperJSON.serialize(data) : data)
  } catch (err: unknown) {
    let message = err

    if (err instanceof ZodError) {
      console.warn(err.message)
      message = err.message
    } else {
      console.error(err)
    }
    res.status(400).json({ message }).end()
  }
}

export const getBaseUrl = () => {
  if (env.VERCEL_ENV !== 'development')
    return env.SERVER_DOMAIN_PUBLIC.includes('http')
      ? env.SERVER_DOMAIN_PUBLIC
      : `https://${env.SERVER_DOMAIN_PUBLIC}`

  return `http://localhost:${env.SERVER_PORT_BE ?? 3000}`
}
