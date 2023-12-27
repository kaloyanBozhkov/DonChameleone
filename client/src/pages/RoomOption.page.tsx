import Button from '@/components/atoms/Button.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
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
            <Group className="font-don stroked-1px sm:stroked-2px lg:stroked-3px gap-[4px] text-[37.6px] max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] lg:gap-[15px] lg:text-[60px]">
              <p className="text-hot-500 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms]">
                Room
              </p>
              <p className="text-hot-200 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms]">
                Option
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex w-[80vw] min-w-fit flex-col items-center p-[40px_50px] sm:max-w-[625px] lg:max-w-[750px]"
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
                    <Button
                      label="Create"
                      className={`${btn} bg-blue-300`}
                      labelClassName={label}
                    />
                  }
                />
                <p
                  className={`${label} font-don -mx-[20px] mt-[30px] scale-[0.8] text-nowrap text-white sm:-mb-[30px] sm:-mt-[10px]`}
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
                    <Button
                      label="Join"
                      className={`${btn} bg-purple-300`}
                      labelClassName={label}
                    />
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
