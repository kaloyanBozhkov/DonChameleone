import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import AppLayout from '@/components/layouts/App.layout'
import DonButton from '@/components/layouts/DonButton.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import Don, { DonColors } from '@/components/molecules/Don.molecule'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function RoomOptionPage() {
  const btn =
      'max-[370px]:h-[52px] max-[370px]:w-[180px] h-[62px] sm:h-[82px] h-[66px] w-[250px] lg:w-[306px]',
    label =
      'max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]'

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls rightAction="signout" />}>
        <div className="flex h-full w-full flex-col items-center justify-start py-[100px] sm:justify-center sm:py-0">
          <Stack className="gap-[15px]">
            <Group className="gap-[4px] font-don text-[37.6px] stroked-1px max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] sm:stroked-2px lg:gap-[15px] lg:text-[60px] lg:stroked-3px">
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                Room
              </p>
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                Option
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="mb-[100px] flex w-[80vw] min-w-fit max-w-[90vw] flex-col items-center p-[20px_25px] sm:mb-0 sm:max-w-[625px] sm:p-[40px_50px] lg:max-w-[750px]"
            >
              <Group className="flex-col sm:flex-row">
                <DonButton
                  donWrapperClassName="-mb-[10px] animation-delay-[500ms]"
                  don={
                    <Don
                      don={DonColors.TRIPLE0}
                      className="w-[250px] max-[370px]:w-full lg:w-[306px]"
                    />
                  }
                  btn={
                    <Link to="/create">
                      <Button
                        label="Create"
                        className={`${btn} bg-blue-300`}
                        labelClassName={label}
                      />
                    </Link>
                  }
                />
                <p
                  className={`${label} -mx-[20px] mt-[30px] scale-[0.8] text-nowrap font-don text-white sm:-mb-[30px] sm:-mt-[10px]`}
                >
                  - or -
                </p>
                <DonButton
                  donWrapperClassName="-mb-[10px] animation-delay-[700ms]"
                  don={
                    <Don
                      don={DonColors.TRIPLE1}
                      className="w-[250px] max-[370px]:w-full lg:w-[306px]"
                    />
                  }
                  btn={
                    <Link to="/join">
                      <Button
                        label="Join"
                        className={`${btn} bg-purple-300`}
                        labelClassName={label}
                      />
                    </Link>
                  }
                />
              </Group>
            </TranspCard>
          </Stack>
        </div>
      </AppLayout>
    </ComicPage>
  )
}
