import express from 'express'
import path from 'path'

const appServeRouter = express.Router()

appServeRouter.use(express.static(path.join(process.cwd(), '/../../../../dist/client')))

appServeRouter.get('/', (_, res) => {
  res.sendFile(path.join(process.cwd(), '/../../../../dist/client/index.html'))
})

export default appServeRouter
