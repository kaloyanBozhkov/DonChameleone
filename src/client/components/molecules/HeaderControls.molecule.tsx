import { Link, useNavigate } from 'react-router-dom'

import useGameConfig from '@/store/useGameConfig'
import useTheme from '@/store/useTheme'

import Button from '../atoms/Button.atom'
import Group from '../layouts/Group.layout'

import CheckboxButton from './CheckboxButton.molecule'

const HeaderControls = ({ rightAction = 'back' }: { rightAction?: 'rules' | 'back' }) => {
  const theme = useTheme(),
    sound = useGameConfig(({ sound }) => sound),
    toggleSound = useGameConfig(({ controls: { toggleSound } }) => toggleSound),
    nav = useNavigate(),
    btnSizes = 'h-[40px] w-[120px] sm:w-[150px] sm:h-[50px] lg:h-[74px] lg:w-[192px]',
    labelSizes =
      'text-[25px] leading-[25px] sm:text-[31px] sm:leading-[31px] lg:text-[40px] lg:leading-[40px] lg:stroked-2px stroked-1px'

  return (
    <div className="flex flex-row justify-between">
      <CheckboxButton
        initialChecked={sound}
        onChange={toggleSound}
        label="Sound"
        tickColor={theme.colors.hot['900']}
        className={`bg-pink ${btnSizes}`}
        labelClassName={labelSizes}
      />
      {rightAction === 'rules' && (
        <Link to="/rules">
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
        </Link>
      )}
      {rightAction === 'back' && (
        <Button
          onClick={() => nav(-1)}
          label={
            <Group className="h-full w-full gap-[6px]">
              <p>Back</p>
            </Group>
          }
          className={`bg-hot-200 ${btnSizes}`}
          labelClassName={labelSizes}
        />
      )}
    </div>
  )
}

export default HeaderControls
