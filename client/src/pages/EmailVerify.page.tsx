import { useParams } from 'react-router-dom'

import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
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
            <Group className="font-don stroked-1px sm:stroked-2px lg:stroked-3px gap-[4px] text-[37.6px] max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] lg:gap-[15px] lg:text-[60px]">
              <p className="text-hot-500 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms]">
                Sign
              </p>
              <p className="text-hot-200 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms]">
                In
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center p-[40px_50px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <p className={`${label} font-don text-center text-white`}>
                We’ve sent you a sign in link to{' '}
                <a target="_blank" href={`https://${params.email?.split('@')[1]}`}>
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
