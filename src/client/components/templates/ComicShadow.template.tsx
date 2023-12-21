import { type ReactNode } from 'react'

const ComicShadow = ({
  children,
  className = '',
  withHover = true,
}: {
  children: ReactNode
  className?: string
  withHover?: boolean
}) => {
  return (
    <div className={`${className} ${withHover ? 'group' : ''} relative z-0`}>
      <div className="z-0">{children}</div>
      <div className="gorup-hover:inset-0 absolute -inset-[2.5%] -z-10 -rotate-3 bg-black transition-all group-hover:m-[1.8%] group-hover:rotate-[3deg]" />
    </div>
  )
}

export default ComicShadow
