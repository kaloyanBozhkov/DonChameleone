import { Link } from 'react-router-dom'

import Button from '@/components/atoms/Button.atom'
import LogoText from '@/components/atoms/LogoText.atom'
import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function RuleBookPage() {
  return (
    <ComicPage variant="bw">
      <AppLayout header={<HeaderControls />}>
        <Center className="-mt-[35px]">
          <Stack className="gap-[25px]">
            <div className="relative -mb-[30px]">
              <Group className="stroked-1px sm:stroked-2px lg:stroked-3px absolute right-[60px] top-[40px] -rotate-3 gap-[15px] font-don text-[60px]">
                <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms] text-hot-500">
                  Rule
                </p>
                <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms] text-hot-200">
                  Book
                </p>
              </Group>
              <LogoText className="w-[400px] scale-0 animate-[pop-in_250ms_ease-in-out_forwards_700ms] max-[370px]:w-[250px] sm:w-[550px] lg:w-[718px]" />
            </div>
            <Link to="/rules/basic">
              <Button
                label="Basic Rules"
                className="h-[66px] w-[250px] bg-blue max-[370px]:h-[42px] max-[370px]:w-[140px] sm:h-[94px] sm:w-[350px] sm:max-w-[unset] lg:h-[116px] lg:w-[440px]"
                labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] text-[40px] sm:text-[54px] lg:text-[70px] stroked-2px sm:stroked-3px lg:stroked-4px leading-[40px] lg:leading-[70px] sm:leading-[54px]"
              />
            </Link>
            <Link to="/rules/1v1">
              <Button
                label="1v1 Rules"
                className="h-[66px] w-[250px] bg-blue max-[370px]:h-[42px] max-[370px]:w-[140px] sm:h-[94px] sm:w-[350px] sm:max-w-[unset] lg:h-[116px] lg:w-[440px]"
                labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] text-[40px] sm:text-[54px] lg:text-[70px] stroked-2px sm:stroked-3px lg:stroked-4px leading-[40px] lg:leading-[70px] sm:leading-[54px]"
              />
            </Link>
            <Link to="/rules/gameplay">
              <Button
                label="Gameplay"
                className="h-[66px] w-[250px] bg-blue max-[370px]:h-[42px] max-[370px]:w-[140px] sm:h-[94px] sm:w-[350px] sm:max-w-[unset] lg:h-[116px] lg:w-[440px]"
                labelClassName="max-[370px]:text-[26px] max-[370px]:leading-[26px] text-[40px] sm:text-[54px] lg:text-[70px] stroked-2px sm:stroked-3px lg:stroked-4px leading-[40px] lg:leading-[70px] sm:leading-[54px]"
              />
            </Link>
            <div className="mt-6 w-fit self-center">
              <Link to="/about">
                <Button
                  label="About Us"
                  className="h-[40px] w-[70px] bg-hot-200 sm:h-[50px] sm:w-[150px] lg:h-[74px] lg:w-[192px]"
                  labelClassName="text-[15px] leading-[15px] sm:text-[31px] sm:leading-[31px] lg:text-[40px] lg:leading-[40px] lg:stroked-2px stroked-1px"
                />
              </Link>
            </div>
          </Stack>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
