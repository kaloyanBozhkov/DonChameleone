import { useMemo } from 'react'

import resolveConfig from 'tailwindcss/resolveConfig'

import * as config from '@/../../tailwind.config.js'

const useTheme = () => {
  const t = useMemo(() => {
    const fullConfig = resolveConfig({
      content: config.default.content,
      theme: config.default.theme,
    })
    return fullConfig.theme
  }, [])
  return t
}

export default useTheme
