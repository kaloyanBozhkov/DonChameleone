import type { ReactNode } from 'react'

const Center = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`flex h-full w-full flex-col items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

export default Center
