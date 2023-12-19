import { useEffect, useState } from 'react'

import { TableRow } from '@/types/tableData.schema'

type Cell = string | number
type Row = { cells: Cell[]; kids: TableRow['kids'] }

export default function useTableData(initialData: TableRow[] = []) {
  const [data, setData] = useState(initialData),
    [tableData, setTableData] = useState<{
      rows: Row[]
      columns: string[]
    }>({
      rows: [],
      columns: [],
    })

  useEffect(() => setData(initialData), [initialData])

  useEffect(() => {
    try {
      const columns = data[0]?.data ? Object.keys(data[0].data) : []
      setTableData({
        columns,
        rows: data.map((row) => ({
          cells: columns.map((col) => row.data[col] ?? '-'),
          kids: row.kids,
        })),
      })
    } catch {
      console.error('failed to read provided data')
    }
  }, [data])

  return {
    ...tableData,
    setData,
  }
}
