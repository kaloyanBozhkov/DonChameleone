import express from 'express'
import AuthController from '~/api/controlles/auth.controller'

const authRouter = express.Router()

authRouter.get('/get-all', AuthController.oAuthSignIn)

export default authRouter
