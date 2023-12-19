import { ReactNode } from 'react'

import ComicShadow from '../templates/ComicShadow.template'

export default function Button({
  onClick,
  label,
  className,
  labelClassName = 'stroked-2px text-[20px] text-white',
}: {
  onClick?: () => void
  label: ReactNode
  className?: string
  labelClassName?: string
}) {
  return (
    <ComicShadow className="">
      <button
        className={`relative cursor-pointer border-[4px] border-white ${className} group z-0`}
        onClick={onClick}
      >
        <p className={`font-don text-white transition-all group-hover:scale-90 ${labelClassName}`}>
          {label}
        </p>
        <div className="absolute inset-0 -z-10 flex items-start justify-end overflow-hidden">
          <div className="bg-dots-full h-full w-full origin-right -rotate-3 scale-[1.6] bg-cover bg-right-top transition-all group-hover:scale-[1.65]" />
        </div>
      </button>
    </ComicShadow>
  )
}
