import { ReactNode, useLayoutEffect, useState } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    let ids = [] as ReturnType<typeof setTimeout>[]
    const runAnim = () => {
      const id = setTimeout(
        () => {
          setScale((prev) => (prev === 1.1 ? 1 : 1.1))
          runAnim()
        },
        ids.length > 0 ? 10000 : 0
      )
      ids.push(id)
    }
    runAnim()
    return () => ids.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative h-full min-h-full w-full border-[10px] border-white">
      {children}
      <div className="bg-linear-bg-overlay absolute inset-0 -z-10" />
      <div
        className="bg-main-1 bg-no-cover absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-[11000ms] ease-linear"
        style={{
          transform: `scale(${scale})`,
        }}
      />
    </div>
  )
}
