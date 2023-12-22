import appServeRouter from './api/routes/app.router'
import trpcRouter from './api/routes/trpc.router'
import cors from 'cors'
import express, { json } from 'express'
import env from '~/env'

const app = express()
const port = env.SERVER_PORT_BE || 3000

app.use(cors())
app.use(json())

app.use('/', appServeRouter)

app.use('/api/trpc', trpcRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

// export for deployment
export default app
