import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import CopyButton from '@/components/atoms/CopyButton.atom'
import DisplayInput from '@/components/atoms/DisplayText'
import PlayerTag from '@/components/atoms/PlayerTag.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import DonButton from '@/components/layouts/DonButton.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import Don, { DonColors } from '@/components/molecules/Don.molecule'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function SelectThemePage() {
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <Group className="gap-[4px] font-don text-[37.6px] stroked-1px max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] sm:stroked-2px lg:gap-[15px] lg:text-[60px] lg:stroked-3px">
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                Select
              </p>
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                Theme
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <DonButton
                donWrapperClassName="m-[0_0_-15px_0] sm:m-[0_0_-21px_0] lg:m-[0_0_-30px_0]"
                don={
                  <Don don={DonColors.TRIPLE0} className="w-[250px] sm:w-[350px] lg:w-[500px]" />
                }
                btn={
                  <Link to="/invite">
                    <Button
                      withDots={false}
                      label="Classic Pack"
                      className="h-[66px] w-[250px] bg-blue max-[370px]:h-[42px] max-[370px]:w-[160px] sm:h-[94px] sm:w-[350px] lg:h-[132px] lg:w-[400px]"
                      labelClassName="max-[370px]:text-[38px] max-[370px]:leading-[38px] text-[60px] sm:text-[84px] lg:text-[120px] stroked-2px sm:stroked-3px lg:stroked-5px leading-[60px] lg:leading-[120px] sm:leading-[84px]"
                    />
                  </Link>
                }
              />
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
