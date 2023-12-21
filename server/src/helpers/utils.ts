import { Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

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
