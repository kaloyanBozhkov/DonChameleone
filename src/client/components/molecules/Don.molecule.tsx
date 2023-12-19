import type { ReactNode } from 'react'

export enum DonColors {
  GREEN,
  ORANGE,
  BLUE,
  PINK,
  BROWN,
  REDBLUE,
  RED,
  BW,
  TRIPLE0,
  TRIPLE1,
}
const Don = ({ don, className = '' }: { don: DonColors; className?: string }) => {
  return (
    <img
      src={`/assets/img/don-${DON_MAP[don]}.png`}
      alt={`DonChameleone ${DON_MAP[don]}`}
      className={className}
    />
  )
}

export default Don

const DON_MAP = {
  [DonColors.BLUE]: 'blue',
  [DonColors.GREEN]: 'green',
  [DonColors.ORANGE]: 'orange',
  [DonColors.PINK]: 'pink',
  [DonColors.BROWN]: 'brown',
  [DonColors.REDBLUE]: 'redblue',
  [DonColors.RED]: 'red',
  [DonColors.BW]: 'bw',
  [DonColors.TRIPLE0]: 'triple-0',
  [DonColors.TRIPLE1]: 'triple-1',
}
