import { Link } from 'react-router-dom'

import Button from '../atoms/Button.atom'
import DonButton from '../layouts/DonButton.layout'
import Don, { DonColors } from '../molecules/Don.molecule'
import TranspCard from '../molecules/TranspCard.molecule'

const PlayCard = () => {
  return (
    <TranspCard
      withSpiral
      className="flex h-[400px] w-[80vw] flex-col items-center p-[40px_50px] max-[370px]:h-[300px] sm:h-[580px] sm:max-w-[500px] lg:h-[730px] lg:max-w-[730px]"
    >
      <DonButton
        donMarginFix="m-[0_0_-15px_0] sm:m-[0_0_-21px_0] lg:m-[0_0_-30px_0]"
        don={<Don don={DonColors.TRIPLE0} className="w-[250px] sm:w-[350px] lg:w-[500px]" />}
        btn={
          <Link to="/play">
            <Button
              label="Play"
              className="h-[66px] w-[250px] bg-blue max-[370px]:h-[42px] max-[370px]:w-[160px] sm:h-[94px] sm:w-[350px] sm:max-w-[unset] lg:h-[132px] lg:w-[500px]"
              labelClassName="max-[370px]:text-[38px] max-[370px]:leading-[38px] text-[60px] sm:text-[84px] lg:text-[120px] stroked-2px sm:stroked-3px lg:stroked-5px leading-[60px] lg:leading-[120px] sm:leading-[84px]"
            />
          </Link>
        }
      />
    </TranspCard>
  )
}

export default PlayCard
