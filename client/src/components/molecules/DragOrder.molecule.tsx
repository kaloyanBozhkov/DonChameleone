import { type ReactNode, useRef } from 'react'

const DragOrder = ({
  children,
  setItems,
  className = '',
}: {
  children: ReactNode[]
  setItems: (arg: (prev: any[]) => any[]) => void
  className?: string
}) => {
  const replaceWithIdx = useRef<number | null>(null),
    handleDragEnd = (event, idx) => {
      event.preventDefault()

      if (replaceWithIdx.current === null || replaceWithIdx.current === idx) {
        replaceWithIdx.current = null
        return
      }

      setItems((prev) => {
        const updatedItems = [...prev],
          [removed] = updatedItems.splice(idx, 1)
        updatedItems.splice(replaceWithIdx.current!, 0, removed)
        replaceWithIdx.current = null
        return updatedItems
      })
    }

  return (
    <div className={`${className}`}>
      {children.map((i, idx) => (
        <div
          key={idx}
          draggable
          onDragOver={() => (replaceWithIdx.current = idx)}
          onDragEnd={(event) => handleDragEnd(event, idx)}
        >
          {i}
        </div>
      ))}
    </div>
  )
}

export default DragOrder
