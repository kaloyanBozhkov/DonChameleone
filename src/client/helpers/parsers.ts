import { formatBoolean, formatDate } from './formatters'

const defaultFormatter = {
  dateFormatter: formatDate,
  booleanFormatter: formatBoolean,
}
/**
 * Takes a string input and returns a parsed primitive value of number, string, date or boolean
 */
export const parseInput = (input: string, formatters = defaultFormatter) => {
  const numericValue = Number(input)

  if (!isNaN(numericValue) && isFinite(numericValue)) {
    return numericValue
  } else if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
    return formatters.booleanFormatter(input.toLowerCase() === 'true')
  } else if (!isNaN(Date.parse(input))) {
    return formatters.dateFormatter(new Date(input))
  } else {
    return input
  }
}
