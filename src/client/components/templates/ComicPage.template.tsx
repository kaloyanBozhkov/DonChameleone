import { type ReactNode } from 'react'

import Don, { DonColors } from '../molecules/Don.molecule'

const ComicPage = ({
  children,
  className,
  variant = 'default',
  withoutDon = false,
}: {
  children: ReactNode
  className?: string
  variant?: 'bw' | 'default'
  withoutDon?: boolean
}) => {
  const { pageBg, overlay, dots, don } = (() => {
    switch (variant) {
      case 'bw':
        return {
          pageBg: 'bg-main-2 opacity-30',
          overlay: 'bg-white opacity-10',
          dots: 'bg-dots-full opacity-50',
          don: !withoutDon && (
            <Don
              don={DonColors.BW}
              className="absolute bottom-[-10px] left-[70px] z-[-11] h-[70vh] w-[auto] max-w-[unset] translate-y-[100%] animate-[slide-top_1000ms_ease-in-out_forwards_500ms] opacity-75"
            />
          ),
        }
      default:
        return {
          pageBg: 'bg-main-1',
          overlay: 'bg-linear-bg-overlay',
          dots: 'bg-dots-radial',
          don: null,
        }
    }
  })()

  return (
    <div className="absolute inset-0">
      <div
        className={`relative z-0 h-full min-h-full w-full overflow-hidden border-[6px] border-white sm:border-[10px] ${className}`}
      >
        {children}
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className={`absolute inset-0 -z-[5] animate-sexy-pops ${dots} bg-cover bg-center`}
            />
            <div className={`absolute inset-0 -z-[8] ${overlay}`} />
            {don}
            <div
              className={`bg-no-cover absolute inset-0 -z-20 animate-sexy-pops ${pageBg} bg-cover bg-center`}
              style={{ animationDuration: '12000ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComicPage
