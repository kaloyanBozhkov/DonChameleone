import type { NextApiRequest, NextApiResponse } from 'next'

import { getBaseUrl } from '@/utils/common'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(302).redirect(`${getBaseUrl()}/#/play`)
}
