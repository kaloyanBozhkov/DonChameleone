import { createTRPCRouter } from '@/server/api/trpc'

import { getCardPacks } from './getCardPacks'

export const cardPackRouter = createTRPCRouter({
  getCardPacks,
})
