import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '@/../../tailwind.config.js'
import useTheme from '@/store/useTheme'

import Button from '../atoms/Button.atom'
import Group from '../layouts/Group.layout'

import CheckboxButton from './CheckboxButton.molecule'

const HeaderControls = () => {
  const theme = useTheme(),
    btnSizes = `h-[40px] w-[120px] sm:w-[150px] sm:h-[50px] lg:h-[74px] lg:w-[192px]`,
    labelSizes =
      'text-[25px] leading-[25px] sm:text-[31px] sm:leading-[31px] lg:text-[40px] lg:leading-[40px] lg:stroked-2px stroked-1px'

  return (
    <div className="flex flex-row justify-between">
      <CheckboxButton
        label="Sound"
        tickColor={theme.colors.hot['900']}
        className={`bg-pink ${btnSizes}`}
        labelClassName={labelSizes}
      />
      <Button
        label={
          <Group className="h-full w-full gap-[6px]">
            <img
              src={require('@/../../public/assets/icons/comic.png')}
              alt="comic book"
              className="h-[100%] w-[auto]"
            />
            <p>Rules</p>
          </Group>
        }
        className={`bg-hot ${btnSizes}`}
        labelClassName={labelSizes}
      />
    </div>
  )
}

export default HeaderControls
