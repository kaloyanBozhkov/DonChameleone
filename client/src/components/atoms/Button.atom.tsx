import { ReactNode, useLayoutEffect, useState } from 'react'

import ComicShadow from '../templates/ComicShadow.template'

import DotsLoader, { DotsLoaderProps } from './DotsLoader.atom'

export default function Button({
  onClick,
  label,
  className,
  wrapperClassName = '',
  labelClassName = 'stroked-2px text-[20px] text-white',
  wrapperStyle,
  dotsLoaderProps,
  withDots = true,
  isLoading = false,
}: {
  onClick?: () => void
  label: ReactNode
  isLoading: boolean
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  wrapperStyle?: Record<string, string>
  withDots?: boolean
  dotsLoaderProps?: DotsLoaderProps
}) {
  const [clicked, setClicked] = useState(false)

  useLayoutEffect(() => {}, [withDots])

  let content = label
  if (typeof label === 'string') content = <p>{label}</p>
  if ((withDots && clicked) || isLoading) {
    const bg = className?.split('bg-')[1]?.split(' ')[0]
    content = (
      <div className="flex w-full items-center justify-center">
        <DotsLoader
          bg={bg ? `bg-${bg}` : 'bg-black'}
          {...dotsLoaderProps}
          className={`${dotsLoaderProps?.className} scale-[1.1] sm:scale-[1.3]`}
        />
      </div>
    )
  }
  useLayoutEffect(() => {
    setClicked(false)
  }, [isLoading])

  return (
    <ComicShadow
      className={`select-none ${wrapperClassName} pointer-events-none`}
      style={wrapperStyle}
    >
      <button
        className={`pointer-events-auto relative cursor-pointer border-[4px] border-white ${className} group z-0`}
        onClick={() => {
          onClick?.()
          setClicked(true)
        }}
      >
        <div
          className={`font-don text-white transition-all group-hover:scale-90 ${labelClassName}`}
        >
          {content}
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={require('-/client/public/assets/img/bg-dots-cool.png')}
            className="pointer-events-none h-[auto] w-[120%] origin-right translate-x-[6px] translate-y-[-10%] -rotate-3 scale-100 opacity-[70%] transition-all group-hover:scale-[1.05]"
          />
        </div>
      </button>
    </ComicShadow>
  )
}
