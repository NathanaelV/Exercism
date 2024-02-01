export function decodedResistorValue([tens, ones, zeros]: string[]) {
  let ohms_temp = `${codeColor(tens)}${codeColor(ones)}`
  let ohms_complete = ohms_multiplier(ohms_temp, zeros)
  return `${metricPrefix(ohms_complete)}ohms`
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

function codeColor(color: string) {
  return COLORS.indexOf(color)
}

function ohms_multiplier(ohms_tens: string, color_tens: string): number {
  return Number(ohms_tens) * 10 ** COLORS.indexOf(color_tens)
}

const KILO = Math.pow(10, 3)
const MEGA = Math.pow(10, 6)
const GIGA = Math.pow(10, 9)

function metricPrefix(number: number): string {
  let answer = ''

  if (number == 0) {
    answer = '0 '
  } else if (number % GIGA == 0) {
    answer = `${number / GIGA} giga`
  } else if (number % MEGA == 0) {
    answer = `${number / MEGA} mega`
  } else if (number % KILO == 0) {
    answer = `${number / KILO} kilo`
  } else {
    answer = `${number} `
  }

  return answer
}
