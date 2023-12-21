import type { ReactNode } from 'react'

const Group = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return <div className={`items-center justify-center ${className} flex flex-row`}>{children}</div>
}

export default Group
