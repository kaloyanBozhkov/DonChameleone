import { useCallback, useState } from 'react'

import Button from '../atoms/Button.atom'
import Checkbox from '../atoms/Checkbox.atom'
import Group from '../layouts/Group.layout'

const CheckboxButton = ({
  onChange,
  className,
  label,
  tickColor,
  labelClassName,
  initialChecked = false,
}: {
  initialChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  labelClassName?: string
  tickColor: string
  label: string
}) => {
  const [checked, setChecked] = useState(initialChecked),
    onBtnClick = useCallback(() => {
      setChecked((prev) => {
        const newV = !prev
        onChange?.(checked)
        return newV
      })
    }, [onChange])

  return (
    <Button
      onClick={onBtnClick}
      label={
        <Group className="gap-[6px]">
          <span>{label}</span>
          <Checkbox
            className="-mt-[12px] h-[27px] w-[30px] sm:-mt-[16px] sm:h-[36px] sm:w-[40px] lg:-mt-[22px] lg:h-[50px] lg:w-[55px]"
            checked={checked}
            tickColor={tickColor}
          />
        </Group>
      }
      className={className}
      labelClassName={labelClassName}
    />
  )
}

export default CheckboxButton
