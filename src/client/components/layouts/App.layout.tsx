import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="h-full w-full overflow-auto">{children}</div>
}
