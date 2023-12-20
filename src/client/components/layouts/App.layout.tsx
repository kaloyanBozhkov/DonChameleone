import { ReactNode } from 'react'

export default function AppLayout({
  children,
  header,
}: {
  children: ReactNode
  header: ReactNode
}) {
  return (
    <div className="relative m-4 h-full">
      <div className="absolute left-0 right-0 top-0 z-10">{header}</div>
      <main className="h-full w-full overflow-auto">{children}</main>
    </div>
  )
}
