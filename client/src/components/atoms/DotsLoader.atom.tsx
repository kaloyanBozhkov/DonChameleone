export type DotsLoaderSize = 'default' | 'sm'

export type DotsLoaderProps = {
  className?: string
  bg: string
  withShadow?: boolean
  withBorder?: boolean
}

const DotsLoader = ({ className, bg, withShadow = true, withBorder = true }: DotsLoaderProps) => (
  <div
    className={`relative h-[14px] w-[80px] ${className} ${
      withShadow ? '[&>div]:shadow-[2px_2px_black]' : ''
    } ${
      withBorder ? '[&>div]:border-[2px] [&>div]:border-white' : ''
    } flex [&>div]:h-[14px] [&>div]:w-[14px] [&>div]:rounded-[50%]`}
  >
    <div className={`${bg} absolute left-[8px] animate-[scale-in_0.6s_infinite_ease-in-out]`} />
    <div
      className={`${bg} absolute left-[8px] animate-[move-right-24px_0.6s_infinite_ease-in-out]`}
    />
    <div
      className={`${bg} absolute left-[32px] animate-[move-right-24px_0.6s_infinite_ease-in-out]`}
    />
    <div className={`${bg} absolute left-[56px] animate-[scale-out_0.6s_infinite_ease-in-out]`} />
  </div>
)

export default DotsLoader
