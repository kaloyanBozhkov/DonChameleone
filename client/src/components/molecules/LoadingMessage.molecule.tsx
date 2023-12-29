import type { ReactNode } from 'react'

import DotsLoader from '../atoms/DotsLoader.atom'
import Stack from '../layouts/Stack.layout'

const LoadingMessage = ({
  message,
  className = '',
}: {
  message: ReactNode
  className?: string
}) => {
  return (
    <Stack className={`${className} gap-[15px]`}>
      <DotsLoader bg="bg-hot-600" withShadow withBorder />
      <p className="max-w-[360px] text-center font-don text-[30px] leading-[30px] text-white stroked-3px">
        {message}
      </p>
    </Stack>
  )
}

export default LoadingMessage
