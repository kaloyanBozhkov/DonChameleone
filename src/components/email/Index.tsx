import { Font, Head, Html, Tailwind, render } from '@react-email/components'

import tailwindConfig from '-/tailwind.config'

import AuthEmail, { type AuthEmailProps } from './organism/Auth.organism'
import EmailPage from './templates/EmailPage.template'

export type EmailType = {
  email: 'authEmail'
  props: AuthEmailProps
}

const Index = ({ email, props }: EmailType) => {
  const body = (() => {
    switch (email) {
      case 'authEmail':
        return <AuthEmail {...props} />
      default:
        return <p key={email}>{email} is not setup</p>
    }
  })()

  return (
    <Tailwind config={tailwindConfig}>
      <Html lang="eng" dir="ltr">
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Arial"
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <EmailPage>{body}</EmailPage>
      </Html>
    </Tailwind>
  )
}

export default Index

export const renderEmail = (props: EmailType) =>
  render(<Index {...props} />, {
    pretty: true,
  })
