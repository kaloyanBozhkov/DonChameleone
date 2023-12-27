import { ReactNode } from 'react'

import { useClipboard } from '@mantine/hooks'

const CopyButton = ({
  children,
  value,
  timeout = 1000,
}: {
  children: (payload: { copied: boolean; copy: () => void }) => ReactNode
  value: string
  className?: string
  timeout?: number
}) => {
  const clipboard = useClipboard({ timeout }),
    copy = () => {
      try {
        clipboard.copy(value)
      } catch (err) {
        console.warn('Failed to copy, iframe origins proably differ', err)
      }
    }
  return <>{children({ copy, copied: clipboard.copied })}</>
}

export default CopyButton
