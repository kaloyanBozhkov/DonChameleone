import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { type EmailType, renderEmail } from '@/components/email/Index'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, ...props } = req.query

    const html = renderEmail({ email, props: props } as EmailType)
    res.status(200).end(html)
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors })
    } else {
      res.status(500).json({ error })
    }
  }
}
