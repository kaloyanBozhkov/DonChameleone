import { ReactNode } from 'react'

import ComicShadow from '../templates/ComicShadow.template'

export default function Button({
  onClick,
  label,
  className,
  wrapperClassName = '',
  labelClassName = 'stroked-2px text-[20px] text-white',
  wrapperStyle,
}: {
  onClick?: () => void
  label: ReactNode
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  wrapperStyle?: Record<string, string>
}) {
  return (
    <ComicShadow className={`select-none ${wrapperClassName}`} style={wrapperStyle}>
      <button
        className={`relative cursor-pointer border-[4px] border-white ${className} group z-0`}
        onClick={onClick}
      >
        <div
          className={`font-don text-white transition-all group-hover:scale-90 ${labelClassName}`}
        >
          {typeof label === 'string' ? <p>{label}</p> : label}
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={require('@/../../public/assets/img/bg-dots-cool.png')}
            className="pointer-events-none h-[auto] w-[120%] origin-right translate-x-[6px] translate-y-[-10%] -rotate-3 scale-100 opacity-[70%] transition-all group-hover:scale-[1.05]"
          />
        </div>
      </button>
    </ComicShadow>
  )
}
