import { useCallback, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import CopyButton from '@/components/atoms/CopyButton.atom'
import DisplayInput from '@/components/atoms/DisplayText'
import PlayerTag from '@/components/atoms/PlayerTag.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import DragOrder from '@/components/molecules/DragOrder.molecule'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import LoadingMessage from '@/components/molecules/LoadingMessage.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import useTheme from '@/store/useTheme'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LobbyPage() {
  const theme = useTheme(),
    isOwner = true,
    [players, setPlayers] = useState([
      { name: 'koko', order: 1, userId: 'id1' },
      { name: 'BojoGangster', order: 2, userId: 'id2' },
      { name: 'Roguexe', order: 3, userId: 'id3' },
      { name: 'Gaco', order: 4, userId: 'id4' },
    ])

  useEffect(() => {
    if (!players.some((p, idx) => p.order !== idx)) return
    setPlayers((prev) => prev.map((i, idx) => ({ ...i, order: idx + 1 })))
  }, [players])

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Player" last="Lobby" />
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
                <DragOrder setItems={setPlayers}>
                  {players.map(({ userId, name, order }) => (
                    <PlayerTag
                      className="font-don"
                      leftSide={
                        isOwner && (
                          <Center className="px-[15px]">
                            <FontAwesomeIcon
                              icon={faBars}
                              size="2x"
                              color="black"
                              className="scale-50 sm:scale-75 lg:scale-100"
                            />
                          </Center>
                        )
                      }
                      fill={order % 2 ? theme.colors.blue['400'] : theme.colors.purple['400']}
                      content={
                        <p className="overflow-hidden text-ellipsis whitespace-nowrap px-[3px] text-[25px] text-white stroked-2px sm:text-[30px] lg:text-[45px]">
                          {name}
                        </p>
                      }
                      key={userId}
                      rightSide={
                        <p className="text-[35px] leading-[100%] text-black sm:text-[43px] lg:text-[65px]">
                          {order}
                        </p>
                      }
                    />
                  ))}
                </DragOrder>
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
