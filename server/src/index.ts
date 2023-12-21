import authRouter from './api/routes/auth.router'
import cors from 'cors'
import express, { json } from 'express'
import env from '~/env'

const app = express()
const port = env.SERVER_PORT || 3000

app.use(cors())
app.use(json())

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

app.use(authRouter)

// export for deployment
export default app
