import type { ReactNode } from 'react'

const Stack = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return <div className={`items-center justify-center ${className} flex flex-col`}>{children}</div>
}

export default Stack
