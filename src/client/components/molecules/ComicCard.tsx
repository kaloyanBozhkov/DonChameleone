import type { ReactNode } from 'react'

import ComicShadow from '../templates/ComicShadow.template'

const TextCard = ({
  children,
  className = '',
  bg,
}: {
  children: ReactNode
  className?: string
  bg: 'red' | 'blue'
}) => {
  return (
    <ComicShadow withHover={false}>
      <div
        className={`${className} ${
          bg === 'blue' ? 'bg-linear-light-blue' : 'bg-linear-light-hot'
        } z-0 border-[10px] border-white shadow-sm`}
      >
        <div className="relative z-10 w-full first-letter:h-full">{children}</div>
        <div
          className={`absolute bottom-[10px] left-[10px] right-[10px] z-0 ${
            bg === 'red' ? 'rotate-0' : 'rotate-180 '
          } overflow-hidden`}
        >
          <img
            src={require('@/../../public/assets/img/bg-dots-cool.png')}
            className={`pointer-events-none relative -z-10 h-[auto] w-[120%] origin-right scale-[2]  ${
              bg === 'red'
                ? 'translate-x-[130%] translate-y-[150%] rotate-[30deg]'
                : 'translate-x-[130%] translate-y-[-150%] -rotate-[30deg]'
            } scale-100 opacity-[70%] transition-all group-hover:scale-[1.05]`}
          />
        </div>
      </div>
    </ComicShadow>
  )
}

export default TextCard
