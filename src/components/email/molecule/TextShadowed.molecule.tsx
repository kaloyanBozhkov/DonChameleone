const TextShadowed = ({
  text,
  className = '',
  textClass = '',
  labelClass = '',
}: {
  text: string
  className?: string
  textClass?: string
  labelClass?: string
}) => {
  return (
    <div className={`${className} relative z-0`}>
      <p className={`z-1 m-0 text-white ${textClass} ${labelClass}`}>{text}</p>
      {/* <p className={`absolute left-[2px] top-[2px] z-[-1] m-0 text-black ${textClass}`}>{text}</p> */}
    </div>
  )
}

export default TextShadowed
