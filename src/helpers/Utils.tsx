export const formatNumberToCurrency = (number: number) => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(0)
    return `$${formattedNumber}k`
  } else {
    return `$${number}`
  }
}
