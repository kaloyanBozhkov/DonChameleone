import type { ReactNode } from 'react'

const DonButton = ({
  don,
  btn,
  className = '',
  donMarginFix = '0 0 -30px 0',
}: {
  don: ReactNode
  btn: ReactNode
  className?: string
  donMarginFix?: string
}) => {
  return (
    <div className={`z-0 flex flex-col items-center justify-center gap-0 ${className}`}>
      <div className="z-0 overflow-hidden">
        <div style={{ margin: donMarginFix }} className="animate-slide-top">
          {don}
        </div>
      </div>
      <div className="z-10">{btn}</div>
    </div>
  )
}

export default DonButton
