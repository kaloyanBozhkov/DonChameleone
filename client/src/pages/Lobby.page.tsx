import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import CopyButton from '@/components/atoms/CopyButton.atom'
import DisplayInput from '@/components/atoms/DisplayText'
import PlayerTag from '@/components/atoms/PlayerTag.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import LoadingMessage from '@/components/molecules/LoadingMessage.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import useTheme from '@/store/useTheme'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LobbyPage() {
  const theme = useTheme()
  const isOwner = true,
    players = [
      { name: 'koko', order: 1, userId: 'id1' },
      { name: 'BojoGangster', order: 2, userId: 'id2' },
      { name: 'Roguexe', order: 3, userId: 'id3' },
      { name: 'Gaco', order: 4, userId: 'id4' },
    ]

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <Group className="gap-[4px] font-don text-[37.6px] stroked-1px max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] sm:stroked-2px lg:gap-[15px] lg:text-[60px] lg:stroked-3px">
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                Player
              </p>
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                Lobby
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              {isOwner && (
                <p className="max-w-[360px] text-center font-don text-[30px] leading-[30px] text-white stroked-2px">
                  ORDER PLAYER NAMES IN CLOCKWISE PLAYER ORDER
                </p>
              )}
              <Stack className="gap-[15px]">
                {players.map(({ userId, name, order }) => (
                  <PlayerTag
                    className="font-don"
                    leftSide={
                      isOwner && (
                        <Center className="px-[15px]">
                          <FontAwesomeIcon icon={faBars} size="2x" color="black" />
                        </Center>
                      )
                    }
                    fill={order % 2 ? theme.colors.blue['400'] : theme.colors.purple['400']}
                    content={<p className="text-[45px] text-white stroked-2px">{name}</p>}
                    key={userId}
                    rightSide={<p className="text-[65px] leading-[100%] text-black">{order}</p>}
                  />
                ))}
              </Stack>
            </TranspCard>
            {!isOwner ? (
              <LoadingMessage
                className="mt-[30px]"
                message="Waiting for everyone to join and room owner  to continue..."
              />
            ) : (
              // @TOD replace with slide btn
              <Link to="/roles">
                <Button
                  withDots={false}
                  label="Continue"
                  wrapperClassName="max-w-[100%] mt-[30px]"
                  className="h-[62px] w-[250px] max-w-[100%] bg-blue-300 max-[370px]:h-[52px] sm:h-[82px] sm:w-[388px]"
                  labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]"
                />
              </Link>
            )}
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
