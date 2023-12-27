import type { ReactNode } from 'react'

import { getBaseUrl } from '@/utils/common'
import { Column, Container, Row, Section } from '@react-email/components'

const EmailPage = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <Section className="h-full w-full">
      <Row>
        <Column colSpan={1} className={`${className} bg-blue flex h-fit w-full items-center`}>
          <div className="mb-[200px] mt-[100px] h-full w-full text-center">
            {/* eslint-disable-next-line */}
            <img
              src={`${getBaseUrl()}/assets/email/don-logo.png`}
              alt="DonChameleone"
              width={500}
              height="auto"
              className="max-w-[90vw]"
            />
            <div className="h-[50px]" />
            <Container className="w-full max-w-[100%] bg-white p-6 shadow-[10px_10px_black]">
              {children}
            </Container>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

export default EmailPage
