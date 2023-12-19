import Button from '@/components/atoms/Button.atom'
import Center from '@/components/layouts/Center.layout'
import DonButton from '@/components/layouts/DonButton.layout'
import Don, { DonColors } from '@/components/molecules/Don.molecule'
import TranspCard from '@/components/molecules/TranspCard.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function IndexPage() {
  return (
    <ComicPage>
      <Center>
        <TranspCard
          withSpiral
          className="flex w-[90vw] max-w-[730px] flex-col items-center p-[40px_50px]"
        >
          <DonButton
            don={<Don don={DonColors.TRIPLE0} className="w-[250px] sm:w-[350px] lg:w-[500px]" />}
            btn={
              <Button
                label="Play"
                className="bg-blue h-[66px] w-[250px] sm:h-[94px] sm:w-[350px] lg:h-[132px] lg:w-[500px]"
                labelClassName="text-[60px] sm:text-[84px] lg:text-[120px] stroked-2px sm:stroked-3px lg:stroked-5px leading-[60px] lg:leading-[120px] sm:leading-[84px]"
              />
            }
          />
        </TranspCard>
      </Center>
    </ComicPage>
  )
}
