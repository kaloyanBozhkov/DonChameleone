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
          <p className="z-1 font-don stroked-2px text-[15px] text-white sm:text-[25px]">{label}</p>
        ) : (
          label
        )}
        <div className="bg-linear-light-purple absolute inset-0 -z-10 rotate-180" />
      </div>
      <div className="bg-linear-light-purple relative h-[62px] w-[250px] border-[5px] border-white shadow-[-5px_5px_black] max-[370px]:h-[52px] max-[370px]:w-full sm:h-[72px] sm:w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="stroked-1px h-full w-full bg-transparent pl-[10px] pr-[53px] font-[Arial] text-[20px] font-semibold text-white outline-none sm:text-[25px]"
        />
        <Center className="pointer-events-none absolute bottom-0 right-[12px] top-0 !w-[unset]">
          <img
            src={require('-/public/assets/icons/edit-icon.svg')}
            className="h-[auto] w-[25px] max-[370px]:w-[20px] sm:w-[35px]"
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
