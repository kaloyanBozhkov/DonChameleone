import serverless from 'serverless-http'

import app from '../../dist/server/index.js'

export const handler = serverless(app)
