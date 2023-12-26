import type { ReactNode } from 'react'

import { Container } from '@react-email/components'

const EmailPage = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`${className} bg-hot flex h-fit w-full items-center`}>
      <Container className="bg-yellow my-[100px] p-6 shadow-[10px_10px_black]">
        {children}
      </Container>
    </div>
  )
}

export default EmailPage
