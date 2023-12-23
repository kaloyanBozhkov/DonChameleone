import { ReactNode } from 'react'

export default function AppLayout({
  children,
  header,
  className = '',
  childrenWrapperClassName = '',
}: {
  children: ReactNode
  header: ReactNode
  className?: string
  childrenWrapperClassName?: string
}) {
  return (
    <div className={`relative h-full ${className}`}>
      <div className="absolute left-4 right-4 top-4 z-10">{header}</div>
      <main className={`h-full w-full overflow-auto ${childrenWrapperClassName}`}>{children}</main>
    </div>
  )
}
