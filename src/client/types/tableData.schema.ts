import { z } from 'zod'

export type TableRow = {
  data: Record<string, string>
  kids: Record<string, { records?: TableRow[] }>
}

export const TableRowSchema: z.Schema<TableRow> = z.lazy(() =>
  z.object({
    data: z.record(z.string()),
    kids: z.record(z.object({ records: z.array(TableRowSchema).optional() })),
  })
)

export const TableDataSchema = z.array(TableRowSchema)
