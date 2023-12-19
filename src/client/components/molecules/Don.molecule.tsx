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
  return <img src={DON_MAP[don]} alt="DonChameleone" className={className} />
}

export default Don

const DON_MAP = {
  [DonColors.BLUE]: require(`../../../../public/assets/img/don-blue.png`),
  [DonColors.GREEN]: require(`../../../../public/assets/img/don-green.png`),
  [DonColors.ORANGE]: require(`../../../../public/assets/img/don-orange.png`),
  [DonColors.PINK]: require(`../../../../public/assets/img/don-pink.png`),
  [DonColors.BROWN]: require(`../../../../public/assets/img/don-brown.png`),
  [DonColors.REDBLUE]: require(`../../../../public/assets/img/don-redblue.png`),
  [DonColors.RED]: require(`../../../../public/assets/img/don-red.png`),
  [DonColors.BW]: require(`../../../../public/assets/img/don-bw.png`),
  [DonColors.TRIPLE0]: require(`../../../../public/assets/img/don-triple-0.png`),
  [DonColors.TRIPLE1]: require(`../../../../public/assets/img/don-triple-1.png`),
}
