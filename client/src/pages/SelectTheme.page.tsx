import { useMemo } from 'react'

import { useNavigate } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import DotsLoader from '@/components/atoms/DotsLoader.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import DonButton from '@/components/layouts/DonButton.layout'
import Stack from '@/components/layouts/Stack.layout'
import Don, { DonColors } from '@/components/molecules/Don.molecule'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import usePlayer from '@/store/usePlayer'
import useRoom from '@/store/useRoom'
import { trpc } from '@/utils/api'

export default function SelectThemePage() {
  const ownedCardPacks = usePlayer(({ player }) => player?.cardPackIds ?? []),
    { mutate: createRoom, isLoading: isCreatingRoom } = trpc.room.create.useMutation({}),
    { isLoading: isLoadingCardPacks, data: cardPacks } = trpc.cardPack.getCardPacks.useQuery(),
    nav = useNavigate(),
    setRoom = useRoom(({ controls }) => controls.setRoom)

  const CardPacks = useMemo(() => {
    if (isLoadingCardPacks)
      return (
        <TranspCard
          withSpiral
          className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
        >
          <DotsLoader bg="bg-hot" />
        </TranspCard>
      )

    if (!cardPacks)
      return (
        <TranspCard
          withSpiral
          className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
        >
          <p>No card packs exist yet</p>
        </TranspCard>
      )

    return cardPacks.map((cardPack) => {
      const isUnlocked = ownedCardPacks.includes(cardPack.id)

      return (
        <TranspCard
          key={cardPack.id}
          withSpiral
          className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] max-[450px]:p-[10px] sm:max-w-[466px] lg:max-w-[525px]"
          data-unlocked={isUnlocked}
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
              <Button
                withDots
                onClick={() => {
                  createRoom(
                    { cardPackId: cardPack.id },
                    {
                      onSuccess: (data) => {
                        setRoom(data.roomId, data.roomName)
                        nav('/invite')
                      },
                      onError: () => {
                        alert('Failed to setup room, try again later')
                        nav('/play')
                      },
                    }
                  )
                }}
                label="Classic Pack"
                className="h-[62px] w-[250px] bg-blue max-[370px]:h-[50px] max-[370px]:w-full sm:h-[90px] sm:w-[350px] lg:h-[105px] lg:w-[400px]"
                labelClassName="max-[370px]:text-[30px] max-[370px]:leading-[30px] text-[48px] sm:text-[67px] lg:text-[76px] stroked-2px lg:stroked-4px leading-[48px] lg:leading-[76px] sm:leading-[67px]"
              />
            }
          />
        </TranspCard>
      )
    })
  }, [cardPacks, isLoadingCardPacks])

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Select" last="Theme" />
            {CardPacks}
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
