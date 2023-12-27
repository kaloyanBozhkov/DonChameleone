const BASE_SPEED = 5000

const Spiral = ({
  className = '',
  maxOn,
  speed = 1,
  opacity = 0.6,
}: {
  className?: string
  maxOn: 'w' | 'h'
  speed?: number
  opacity?: number
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        <div className={'absolute -inset-[400px] flex items-center justify-center'}>
          <img
            src={require('-/client/public/assets/img/bg-spiral-effect.png')}
            className={`${maxOn === 'h' ? 'h-full w-[auto]' : 'h-[auto] w-full'} animate-spin 
            transition-transform ease-linear
              `}
            style={{ opacity, animationDuration: `${BASE_SPEED * speed}ms` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Spiral
