const Checkbox = ({
  checked,
  className,
  tickColor,
  onClick,
}: {
  checked: boolean
  onClick?: () => void
  className?: string
  tickColor: string
}) => {
  const props = {
    className,
    tickColor,
    strokeWidth: 6,
    onClick,
  }

  return checked ? <CheckboxChecked {...props} /> : <CheckboxUnchecked {...props} />
}

export default Checkbox

const CheckboxUnchecked = ({
  strokeWidth = 6,
  className = '',
  onClick,
}: {
  strokeWidth: number
  className?: string
  onClick?: () => void
}) => (
  <svg
    onClick={onClick}
    className={className}
    width="119"
    height="106"
    viewBox="0 0 119 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15.249"
      y="39.8348"
      width="63.9755"
      height="63.1651"
      fill="#D9D9D9"
      stroke="black"
      strokeWidth={strokeWidth}
    />
  </svg>
)

const CheckboxChecked = ({
  strokeWidth = 6,
  className = '',
  tickColor = '#51F9C7',
  onClick,
}: {
  strokeWidth: number
  onClick?: () => void
  className?: string
  tickColor?: string
}) => (
  <svg
    onClick={onClick}
    className={className}
    width="119"
    height="106"
    viewBox="0 0 119 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15.249"
      y="39.8348"
      width="63.9755"
      height="63.1651"
      fill="#D9D9D9"
      stroke="black"
      strokeWidth={strokeWidth}
    />
    <path
      d="M113 35.156L48.102 93.6009L7 72.6972L21.2776 58.6193C28.6327 65.8716 43.6337 76.7279 45.9388 78.2431C47.2367 79.0963 48.102 79.0963 48.5347 77.8165L86.6082 7L113 35.156Z"
      fill={tickColor}
      stroke="black"
      strokeWidth={strokeWidth + 2}
    />
  </svg>
)
