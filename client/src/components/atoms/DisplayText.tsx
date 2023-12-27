const DisplayText = ({ value, className }: { value: string; className?: string }) => {
  return (
    <div
      className={`${className} bg-linear-light-purple relative flex h-[62px] w-[250px] flex-col items-center justify-center border-[5px] border-white shadow-[-5px_5px_black] max-[370px]:w-full sm:h-[72px] sm:w-full`}
    >
      <p className="stroked-2px sm:stroked-3px font-don text-nowrap bg-transparent px-[30px] text-[30px] tracking-[2px] text-white outline-none sm:text-[45px]">
        {value}
      </p>
    </div>
  )
}

export default DisplayText
