import Button from '@/components/atoms/Button.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function AuthPage() {
  const btn =
      'max-[370px]:h-[52px] max-[370px]:w-[180px] h-[82px] h-[66px] w-[250px]  sm:w-[388px]',
    label =
      'max-[370px]:text-[26px] max-[370px]:leading-[26px] sm:text-[54px] text-[40px] max-[370px]:stroked-2px stroked-3px leading-[40px]'

  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center>
          <Stack>
            <Group className="stroked-1px sm:stroked-2px lg:stroked-3px gap-[4px] font-don text-[37.6px] max-[370px]:text-[20px] sm:gap-[8px] sm:text-[50px] lg:gap-[15px] lg:text-[60px]">
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                Sign
              </p>
              <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                In
              </p>
            </Group>
            <TranspCard
              withSpiral
              className="flex h-[400px] w-[80vw] flex-col items-center p-[40px_50px] max-[370px]:h-[300px] sm:h-[456px] sm:max-w-[466px] lg:h-[575px] lg:max-w-[525px]"
            >
              <Stack className="gap-[20px] lg:gap-[35px]">
                <Button
                  label={
                    <Group className="gap-[30px]">
                      <img
                        src={require('@/../../public/assets/icons/google.png')}
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
                    <Group className="gap-[30px]">
                      <img
                        src={require('@/../../public/assets/icons/fb.png')}
                        className="h-[40px] w-[auto] sm:h-[56px]"
                      />
                      <p>Facebook</p>
                    </Group>
                  }
                  className={`bg-blue ${btn}`}
                  labelClassName={label}
                />
                <p className={`${label} -my-1 scale-[0.8] font-don text-white`}>- or -</p>
                <Button label="Sign in" className={`bg-purple ${btn}`} labelClassName={label} />
              </Stack>
            </TranspCard>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
