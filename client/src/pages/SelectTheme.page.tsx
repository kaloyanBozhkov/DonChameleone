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
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function SelectThemePage() {
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Select" last="Theme" />
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <DonButton
                className="w-ful max-[370px]:items-stretch"
                donWrapperClassName="m-[0_0_-15px_0] sm:m-[0_0_-21px_0] lg:m-[0_0_-30px_0]"
                don={
                  <Don
                    don={DonColors.TRIPLE0}
                    className=" w-[250px] max-[370px]:w-full sm:w-[350px] lg:w-[500px]"
                  />
                }
                btn={
                  <Link to="/invite">
                    <Button
                      withDots={false}
                      label="Classic Pack"
                      className="h-[62px] w-[250px] bg-blue max-[370px]:h-[50px] max-[370px]:w-full sm:h-[90px] sm:w-[350px] lg:h-[105px] lg:w-[400px]"
                      labelClassName="max-[370px]:text-[30px] max-[370px]:leading-[30px] text-[48px] sm:text-[67px] lg:text-[76px] stroked-2px lg:stroked-4px leading-[48px] lg:leading-[76px] sm:leading-[67px]"
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
