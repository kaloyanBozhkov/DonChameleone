import { ReactNode } from 'react'

export default function Button({
  onClick,
  label,
  className,
}: {
  onClick?: () => void
  label: ReactNode
  className?: string
}) {
  return (
    <button
      className={`px-5 py-2 shadow-md hover:bg-primary-200 hover:dark:bg-primary-dark-200 transition-all bg-primary-100 dark:bg-primary-dark-100 text-primary dark:text-primary-dark rounded-md border-primary dark:border-primary-dark-300 border-solid border-[1px] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
