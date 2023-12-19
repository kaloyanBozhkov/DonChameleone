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
            don={<Don don={DonColors.TRIPLE0} className="w-[500px]" />}
            btn={
              <Button
                label="Play"
                className="bg-blue h-[132px] w-[500px]"
                labelClassName="text-[120px] stroked-5px leading-[120px]"
              />
            }
          />
        </TranspCard>
      </Center>
    </ComicPage>
  )
}
