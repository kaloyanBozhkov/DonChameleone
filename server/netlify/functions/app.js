import serverless from 'serverless-http'

import app from '../../../dist/server/index'

export const handler = serverless(app)
