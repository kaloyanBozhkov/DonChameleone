import { Button, Column, Row, Section, Text } from '@react-email/components'

import TextShadowed from '../molecule/TextShadowed.molecule'

export type AuthEmailProps = { to: string }

const AuthEmail = ({ to }: AuthEmailProps) => {
  return (
    <Section className="h-full">
      <Row>
        <Column colSpan={1}>
          <TextShadowed
            text="DonChameleone"
            textClass="text-[40px] leading-[40px]"
            labelClass="text-blue"
          />
          <div className="h-[30px]" />
          <TextShadowed
            text="Wanna sign in? You're almost there! Just click the below button and get started
              playin'!!"
            textClass="text-[30px] leading-[30px]"
          />
          <div className="h-[30px]" />
          <Button
            href={to}
            className="bg-brand stroked-2px bg-blue border-[1px] border-black p-4 px-8 text-[25px] font-medium leading-[25px] text-white shadow-[5px_5px_black]"
          >
            Sign In
          </Button>
        </Column>
      </Row>
    </Section>
  )
}

export default AuthEmail
