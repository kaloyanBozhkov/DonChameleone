import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import InputText from '@/components/atoms/InputText.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import { isNotEmpty, useForm } from '@mantine/form'

export default function JoinRoomPage() {
  const loc = useLocation(),
    form = useForm({
      initialValues: {
        roomName: '',
      },
      validate: { roomName: isNotEmpty('Missing field') },
    })

  useEffect(() => {
    const params = new URLSearchParams(loc.search)
    if (params.has('room')) form.setFieldValue('roomName', params.get('room')!)
  }, [])

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center className="mt-[50px] sm:mt-0">
          <Stack className="gap-[15px]">
            <Group className="gap-[4px] font-don text-[37.6px] stroked-1px max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] sm:stroked-2px lg:gap-[15px] lg:text-[60px] lg:stroked-3px">
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                Join
              </p>
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                Room
              </p>
            </Group>
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
                onClick={() => {
                  const { hasErrors } = form.validate()

                  if (hasErrors) return

                  // check room exists
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
