import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import DonButton from '@/components/layouts/DonButton.layout'
import Don, { DonColors } from '@/components/molecules/Don.molecule'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

export default function IndexPage() {
  const PlayBtn = (
    <Button
      withDots={false}
      label="Play"
      className="bg-blue h-[66px] w-[250px] max-[370px]:h-[42px] max-[370px]:w-[160px] sm:h-[94px] sm:w-[350px] sm:max-w-[unset] lg:h-[132px] lg:w-[500px]"
      labelClassName="max-[370px]:text-[38px] max-[370px]:leading-[38px] text-[60px] sm:text-[84px] lg:text-[120px] stroked-2px sm:stroked-3px lg:stroked-5px leading-[60px] lg:leading-[120px] sm:leading-[84px]"
    />
  )
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls rightAction="rules" />}>
        <Center>
          <TranspCard
            withSpiral
            className="flex h-[400px] w-[80vw] flex-col items-center p-[40px_50px] max-[370px]:h-[300px] sm:h-[580px] sm:max-w-[500px] lg:h-[730px] lg:max-w-[730px]"
          >
            <DonButton
              donMarginFix="m-[0_0_-15px_0] sm:m-[0_0_-21px_0] lg:m-[0_0_-30px_0]"
              don={<Don don={DonColors.TRIPLE0} className="w-[250px] sm:w-[350px] lg:w-[500px]" />}
              btn={
                <>
                  <SignedIn>
                    <Link to="/play">{PlayBtn}</Link>
                  </SignedIn>
                  <SignedOut>
                    <Link to="/auth">{PlayBtn}</Link>
                  </SignedOut>
                </>
              }
            />
          </TranspCard>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
