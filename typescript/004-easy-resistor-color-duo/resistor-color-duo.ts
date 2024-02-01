export function decodedValue(colors: Array<string>) {
  // throw new Error('Remove this statement and implement this function')
  let firstColorNum = COLORS.indexOf(colors[0])
  let secondColorNum = COLORS.indexOf(colors[1])

  return Number(`${firstColorNum}${secondColorNum}`)
}

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
