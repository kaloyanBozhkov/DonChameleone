import { Request, Response } from 'express'
import { geenricHandler } from '~/helpers/utils'

export default class AuthController {
  static oAuthSignIn(req: Request, res: Response) {
    geenricHandler(
      res,
      async () => {
        // const { bookId, type } = FileExportSchema.parse(req.body)

        return { status: 'started' }
      },
      false
    )
  }
}
