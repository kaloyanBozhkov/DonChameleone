import type { ReactNode } from 'react'

const DonButton = ({
  don,
  btn,
  className = '',
  donWrapperClassName = '',
}: {
  don: ReactNode
  btn: ReactNode
  className?: string
  donWrapperClassName?: string
}) => {
  return (
    <div className={`z-0 flex flex-col items-center justify-end gap-0 ${className} h-full w-full`}>
      <div className="z-0 overflow-hidden">
        <div className={`animate-slide-top ${donWrapperClassName} translate-y-[100%]`}>{don}</div>
      </div>
      <div className="z-10">{btn}</div>
    </div>
  )
}

export default DonButton
