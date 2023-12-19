import Button from '../atoms/Button.atom'
import DonButton from '../layouts/DonButton.layout'
import Don, { DonColors } from '../molecules/Don.molecule'
import TranspCard from '../molecules/TranspCard.molecule'

const PlayCard = () => {
  return (
    <TranspCard
      withSpiral
      className="flex h-[400px] w-[80vw] flex-col items-center p-[40px_50px] sm:h-[535px] sm:max-w-[500px] lg:h-[730px] lg:max-w-[730px]"
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
  )
}

export default PlayCard
