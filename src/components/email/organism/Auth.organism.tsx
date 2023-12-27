import { getBaseUrl } from '@/utils/common'
import { Column, Img, Link, Row, Section, Text } from '@react-email/components'

export type AuthEmailProps = { to: string }

const AuthEmail = ({ to }: AuthEmailProps) => {
  return (
    <Section className="h-full w-full">
      <Row>
        <Column colSpan={1}>
          <div className="m-auto max-w-[600px] text-left">
            <Text className="text-[30px] font-semibold leading-[36px] text-black">
              Sign In To Play!
            </Text>
            <Text className="text-[30px] leading-[36px] text-black">
              Click the below button in order to sign in and begin your session.
            </Text>
            <div className="h-[20px]" />
            <Link href={to}>
              <Img
                src={`${getBaseUrl()}/assets/email/sign-in-btn.jpeg`}
                alt="Sign In"
                width={400}
                height="auto"
                className="-ml-[30px] max-w-[90vw]"
              />
            </Link>
            <div className="h-[60px]" />
            <Text className="text-[18px] leading-[22px] text-black">
              If you have trouble clicking the "Sign In" button, you can copy and paste the
              following link into your browser:
              <br />
              <br />
              <span className="text-[18px] text-slate-800">{to}</span>
            </Text>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

export default AuthEmail
