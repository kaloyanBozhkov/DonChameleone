import { useEffect } from 'react'

import { Navigate, useLocation } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import InputText from '@/components/atoms/InputText.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import useRoom from '@/store/useRoom'
import { trpc } from '@/utils/api'
import { isNotEmpty, useForm } from '@mantine/form'

export default function JoinRoomPage() {
  const loc = useLocation(),
    form = useForm({
      initialValues: {
        roomName: '',
      },
      validate: { roomName: isNotEmpty('Missing field') },
    }),
    { refetch: getRoomName, isFetching: isGettingRoomName } = trpc.room.get.useQuery(
      { name: form.values.roomName },
      { enabled: false }
    ),
    setRoom = useRoom(({ controls }) => controls.setRoom),
    room = useRoom(({ room }) => room)

  useEffect(() => {
    const params = new URLSearchParams(loc.search)
    if (params.has('room')) form.setFieldValue('roomName', params.get('room')!)
  }, [])

  if (room) return <Navigate to="/lobby" />

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <PageTitle first="Join" last="Room" />
            <TranspCard
              withSpiral
              className="flex w-[80vw] flex-col items-center gap-[40px] p-[40px_50px] sm:max-w-[466px] lg:max-w-[525px]"
            >
              <InputText
                label="Room Name:"
                value={form.values.roomName}
                onChange={form.getInputProps('roomName').onChange}
                error={form.errors?.roomName}
                className="w-[250px] max-[370px]:w-[180px] sm:w-[388px] "
              />
              <Button
                withDots={false}
                isLoading={isGettingRoomName}
                onClick={() => {
                  const { hasErrors } = form.validate()
                  if (hasErrors) return

                  void (async () => {
                    const resp = await getRoomName()
                    if (!resp.isSuccess || !resp.data) {
                      form.setFieldError('roomName', "Doesn't exist")
                      return
                    }
                    const { name, id } = resp.data
                    setRoom(id, name)
                  })()
                }}
                label="Join Room"
                className="h-[62px] w-[250px] bg-purple-300 max-[370px]:h-[52px] max-[370px]:w-[180px] sm:h-[82px] sm:w-[388px]"
                labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]"
              />
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
