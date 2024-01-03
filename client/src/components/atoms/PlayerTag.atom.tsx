import type { ReactNode } from 'react'

const PlayerTag = ({
  content,
  rightSide,
  leftSide,
  fill,
  className = '',
}: {
  content: ReactNode
  rightSide?: ReactNode
  leftSide?: ReactNode
  className?: string
  fill: string
}) => {
  return (
    <div className={`${className} relative z-0 select-none`}>
      <div className="absolute bottom-[10%] left-[5%] right-[13%] top-[10%] z-10 flex flex-row">
        <div className="min-w-[6.5%]">{leftSide}</div>
        <div className="flex w-[58%] items-center lg:w-[75%]">{content}</div>
        <div className="ml-auto flex w-[8.5%] items-center">{rightSide}</div>
      </div>
      <WrapperTag fill={fill} className="h-auto w-full" />
    </div>
  )
}

export default PlayerTag

const WrapperTag = ({
  fill,
  strokeWidth = 3,
  ...props
}: {
  fill: string
  strokeWidth?: number
  className?: string
}) => {
  return (
    <svg
      width="477"
      height="94"
      viewBox="0 0 477 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_124_4719)">
        <path
          d="M30.0001 18.0391L18 78.5391L413.5 84.5391L457.5 10.0391L30.0001 18.0391Z"
          fill={fill}
          stroke="black"
          strokeWidth="3"
        />
        <path d="M362 82.0391L373.5 13.0391L455 11.5391L412.5 83.0391L362 82.0391Z" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_124_4719"
          x="-7"
          y="-6.96094"
          width="483.378"
          height="100.02"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" dy="-5" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.225 0 0 0 0 0.225 0 0 0 0 0.225 0 0 0 0.45 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_124_4719" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_124_4719"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
