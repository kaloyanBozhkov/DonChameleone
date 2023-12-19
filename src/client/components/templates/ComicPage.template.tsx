import { type ReactNode, useLayoutEffect, useState } from 'react'

import useSwing from '@/hooks/animations/useSwing'

const ComicPage = ({ children, className }: { children: ReactNode; className?: string }) => {
  const scale = useSwing({ min: 1, max: 1.1, duration: 10000 })

  return (
    <div
      className={`relative z-0 h-full min-h-full w-full overflow-hidden border-[10px] border-white ${className}`}
    >
      {children}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="bg-dots-radial absolute inset-0 -z-[5] bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{
              transform: `scale(${scale})`,
            }}
          />
          <div className="bg-linear-bg-overlay absolute inset-0 -z-10" />
          <div
            className="bg-main-1 bg-no-cover absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-[11000ms] ease-linear"
            style={{
              transform: `scale(${scale})`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ComicPage
