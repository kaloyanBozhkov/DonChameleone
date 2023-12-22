import { Request, Response, Router } from 'express'
import { renderTrpcPanel } from 'trpc-panel'
import { getBaseUrl } from '~/helpers/utils'
import expressRouteTRPC from '~/trpc/expressRouteTRPC'
import { appRouter } from '~/trpc/routers/_app'

const trpcRouter = Router()

trpcRouter.get('/panel', (_: Request, res: Response) => {
  console.log(`${getBaseUrl()}/api/trpc`)
  if (process.env.VERCEL_ENV !== 'development') return res.status(404)
  res.status(200).send(
    renderTrpcPanel(appRouter, {
      url: `${getBaseUrl()}/api/trpc`,
      transformer: 'superjson',
    })
  )
})

trpcRouter.all('*', expressRouteTRPC)

export default trpcRouter
