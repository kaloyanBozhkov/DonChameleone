import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import CopyButton from '@/components/atoms/CopyButton.atom'
import DisplayInput from '@/components/atoms/DisplayText'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import { getBaseUrl } from '@/utils/utils'

export default function InviteFriendsPage() {
  const roomName = 'room name'
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Invite" last="Friends" />
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <Stack className="-rotate-[3deg] gap-0 font-don text-white">
                <p className="text-[20px] leading-[20px] stroked-2px sm:text-[30px] sm:leading-[30px]">
                  Your room is ready!
                </p>
                <p className="text-[33px] leading-[33px] stroked-2px sm:text-[50px] sm:leading-[50px]">
                  The <span className="text-hot-500">room</span>{' '}
                  <span className="text-hot-200">name</span> is:
                </p>
              </Stack>
              <DisplayInput value={roomName} className="sm:max-w-[388px]" />
              <CopyButton value={`${getBaseUrl()}/join?room=${roomName}`}>
                {({ copied, copy }) => (
                  <Button
                    wrapperClassName="max-w-[100%]"
                    withDots={false}
                    onClick={copy}
                    label={
                      <Group className="gap-[10px]">
                        {!copied && (
                          <img
                            src={require('-/client/public/assets/icons/share.png')}
                            className="-ml-[20px] h-auto w-[25px] sm:w-[45px]"
                          />
                        )}
                        <p>{copied ? 'Copied!' : 'Share Link'}</p>
                      </Group>
                    }
                    className="h-[62px] w-[250px] max-w-[100%] bg-purple-300 max-[370px]:h-[52px] sm:h-[82px] sm:w-[388px]"
                    labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]"
                  />
                )}
              </CopyButton>

              <Link to="/lobby">
                <Button
                  withDots={false}
                  label="Continue"
                  wrapperClassName="max-w-[100%]"
                  className="h-[62px] w-[250px] max-w-[100%] bg-blue-300 max-[370px]:h-[52px] sm:h-[82px] sm:w-[388px]"
                  labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]"
                />
              </Link>
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
