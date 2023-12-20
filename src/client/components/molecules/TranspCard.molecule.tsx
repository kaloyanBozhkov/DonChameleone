import type { ReactNode } from 'react'

import Spiral from '../atoms/Spiral.atom'

const TranspCard = ({
  children,
  className = '',
  withSpiral,
}: {
  children: ReactNode
  className?: string
  withSpiral?: boolean
}) => {
  return (
    <div className={`${className} relative z-0 border-[6px] border-hot-600 shadow-dope`}>
      {children}
      <div className="absolute inset-0 -z-10 bg-linear-diagonal-purple-green" />
      {withSpiral && <Spiral maxOn="w" className="-z-10" speed={3} opacity={0.15} />}
    </div>
  )
}

export default TranspCard
