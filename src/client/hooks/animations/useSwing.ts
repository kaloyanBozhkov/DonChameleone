import { useLayoutEffect, useState } from 'react'

const useSwing = ({
  min,
  max,
  duration = 10000,
}: {
  min: number
  max: number
  duration?: number
}) => {
  const [val, setVal] = useState(1)

  useLayoutEffect(() => {
    const ids = [] as ReturnType<typeof setTimeout>[]
    const runAnim = () => {
      const id = setTimeout(
        () => {
          setVal((prev) => (prev === max ? min : max))
          runAnim()
        },
        ids.length > 0 ? duration : 0
      )
      ids.push(id)
    }
    runAnim()
    return () => ids.forEach(clearTimeout)
  }, [])

  return val
}

export default useSwing
