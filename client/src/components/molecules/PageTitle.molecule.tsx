import Group from '../layouts/Group.layout'

const PageTitle = ({
  first,
  last,
  className = '',
}: {
  first: string
  last: string
  className?: string
}) => {
  return (
    <Group
      className={`gap-[4px] font-don text-[37.6px] stroked-1px max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] sm:stroked-2px lg:gap-[15px] lg:text-[60px] lg:stroked-3px ${className}`}
    >
      <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
        {first}
      </p>
      <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
        {last}
      </p>
    </Group>
  )
}

export default PageTitle
