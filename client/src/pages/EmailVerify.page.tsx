import { useParams } from 'react-router-dom'

import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function EmailVerifyPage() {
  const label =
      'max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[35px] text-[30px] stroked-2px leading-[40px]',
    params = useParams()

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Sign" last="In" />
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center p-[40px_50px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <p className={`${label} text-center font-don text-white`}>
                We’ve sent you a sign in link to{' '}
                <a target="_blank" href={`https://${params.email?.split('@')[1]}`} rel="noreferrer">
                  <span className="text-hot hover:text-hot-600">{params.email}</span>
                </a>
                .
                <br />
                <br />
                Click the link we’ve sent you to finish your sign in.
              </p>
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
