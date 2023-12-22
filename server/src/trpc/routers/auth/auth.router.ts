import { signIn } from './signIn'
import { router } from '~/trpc/trpc'

export const authRouter = router({
  signIn,
})
