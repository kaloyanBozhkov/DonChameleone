import { type ReactNode } from 'react'

import Center from '../layouts/Center.layout'

const InputText = ({
  label,
  className = '',
  onChange,
  value,
  error,
}: {
  label: ReactNode
  className?: string
  value?: string
  onChange?: (s: string) => void
  error?: ReactNode
}) => {
  return (
    <div className={`${className} relative`}>
      <div className="relative bottom-[-5px] z-0 w-fit overflow-hidden rounded-t-[20px] border-[4px] border-white px-[20px] shadow-[-5px_5px_black]">
        {typeof label === 'string' ? (
          <p className="z-1 stroked-2px font-don text-[15px] text-white sm:text-[25px]">{label}</p>
        ) : (
          label
        )}
        <div className="absolute inset-0 -z-10 rotate-180 bg-linear-light-purple" />
      </div>
      <div className="relative h-[72px] w-full border-[5px] border-white bg-linear-light-purple shadow-[-5px_5px_black]">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="stroked-1px h-full w-full bg-transparent pl-[10px] pr-[53px] font-[Arial] text-[25px] font-semibold text-white outline-none"
        />
        <Center className="pointer-events-none absolute bottom-0 right-[12px] top-0 !w-[unset]">
          <img
            src={require('@/../../public/assets/icons/edit-icon.svg')}
            className="h-[auto] w-[35px]"
          />
        </Center>
      </div>
      {error && (
        <p className="stroked-white-1px sm:stroked-white-2px absolute right-0 top-[5px] font-[Arial] text-[15px] font-semibold text-red-600 sm:text-[25px]">
          * {error}
        </p>
      )}
    </div>
  )
}

export default InputText
