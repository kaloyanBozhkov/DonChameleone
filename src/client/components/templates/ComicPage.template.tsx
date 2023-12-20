import { type ReactNode } from 'react'

const ComicPage = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`relative z-0 h-full min-h-full w-full overflow-hidden border-[6px] border-white sm:border-[10px] ${className}`}
    >
      {children}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full overflow-hidden">
          <div className="animate-sexy-pops absolute inset-0 -z-[5] bg-dots-radial bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-linear-bg-overlay" />
          <div
            className="bg-no-cover animate-sexy-pops absolute inset-0 -z-20 bg-main-1 bg-cover bg-center"
            style={{ animationDuration: '12000ms' }}
          />
        </div>
      </div>
    </div>
  )
}

export default ComicPage
