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
    <ComicShadow className="select-none">
      <button
        className={`relative cursor-pointer border-[4px] border-white ${className} group z-0`}
        onClick={onClick}
      >
        <div
          className={`font-don text-white transition-all group-hover:scale-90 ${labelClassName}`}
        >
          {typeof label === 'string' ? <p>{label}</p> : label}
        </div>
        <div className="absolute inset-0 -z-10 flex items-start justify-end overflow-hidden">
          <div className="h-full w-full origin-right -rotate-3 scale-[1.6] bg-dots-full bg-cover bg-right-top transition-all group-hover:scale-[1.65]" />
        </div>
      </button>
    </ComicShadow>
  )
}
