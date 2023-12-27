import Button from '@/components/atoms/Button.atom'
import CopyButton from '@/components/atoms/CopyButton.atom'
import DisplayInput from '@/components/atoms/DisplayText'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
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
            <Group className="font-don stroked-1px sm:stroked-2px lg:stroked-3px gap-[4px] text-[37.6px] max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] lg:gap-[15px] lg:text-[60px]">
              <p className="text-hot-500 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms]">
                Join
              </p>
              <p className="text-hot-200 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms]">
                Room
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
            >
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

              <Button
                withDots={false}
                onClick={() => {
                  // continue to game
                }}
                label="Continue"
                wrapperClassName="max-w-[100%]"
                className="h-[62px] w-[250px] max-w-[100%] bg-blue-300 max-[370px]:h-[52px] sm:h-[82px] sm:w-[388px]"
                labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]"
              />
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
