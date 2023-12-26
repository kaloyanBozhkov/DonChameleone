import type { SendVerificationRequestParams } from 'next-auth/providers/email'
import { createTransport } from 'nodemailer'

import { renderEmail } from '@/components/email/Index'

export default async function sendVerificationRequest({
  identifier,
  url,
  provider,
}: SendVerificationRequestParams) {
  const { host } = new URL(url),
    transport = createTransport(provider.server as string),
    result = await transport.sendMail({
      to: identifier,
      from: provider.from,
      subject: 'Sign in to DonChameleone',
      text: text({ url, host }),
      html: renderEmail({ email: 'authEmail', props: { to: url } }),
    }),
    failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
  }
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`
}
