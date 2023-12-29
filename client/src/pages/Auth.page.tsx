import Button from '@/components/atoms/Button.atom'
import InputText from '@/components/atoms/InputText.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PageTitle from '@/components/molecules/PageTitle.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'
import { messageSystem } from '@/iframe/messageSystem'
import { isEmail, useForm } from '@mantine/form'

export default function AuthPage() {
  // @TODO add layout for common sizes
  const btn =
      'max-[370px]:h-[52px] max-[370px]:w-[180px] h-[62px] sm:h-[82px] h-[66px] w-[250px] sm:w-[388px]',
    label =
      'max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]',
    signInForm = useForm({
      initialValues: {
        email: '',
      },
      validate: {
        email: isEmail('Invalid email'),
      },
    })

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
              <Stack className="gap-[20px] lg:gap-[35px]">
                <Button
                  withDots
                  onClick={() => {
                    messageSystem({ action: 'signInGoogle' })
                  }}
                  label={
                    <Group className="gap-[15px] sm:gap-[30px]">
                      <img
                        src={require('-/public/assets/icons/google.png')}
                        className="h-[40px] w-[auto] sm:h-[56px]"
                      />
                      <p>Google</p>
                    </Group>
                  }
                  className={`bg-yellow-500 ${btn}`}
                  labelClassName={label}
                />
                <Button
                  label={
                    <Group className="gap-[15px] sm:gap-[30px]">
                      <img
                        src={require('-/public/assets/icons/fb.png')}
                        className="h-[40px] w-[auto] sm:h-[56px]"
                      />
                      <p>Facebook</p>
                    </Group>
                  }
                  className={`bg-blue ${btn}`}
                  labelClassName={label}
                />
                <p className={`${label} -mb-[30px] -mt-[10px] scale-[0.8] font-don text-white`}>
                  - or -
                </p>
                <Stack className="gap-[25px]">
                  <InputText
                    label="Email"
                    value={signInForm.values.email}
                    className="w-full"
                    onChange={signInForm.getInputProps('email').onChange}
                    error={signInForm.errors?.email}
                  />
                  <Button
                    onClick={async () => {
                      const { hasErrors } = signInForm.validate()

                      if (hasErrors) return

                      messageSystem({
                        action: 'signInEmail',
                        payload: { email: signInForm.values.email },
                      })
                    }}
                    label="Sign in"
                    className={`bg-purple ${btn}`}
                    labelClassName={label}
                  />
                </Stack>
              </Stack>
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
