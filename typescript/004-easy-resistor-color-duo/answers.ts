// First solution

export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof ResistorValues;

export function decodedValue([first, second]: Color[]): number {
  return Number(`${ResistorValues[first]}${ResistorValues[second]}`)
}


// ----------------------------------------------------------------------

// Second Solution

// resistor-color solution START
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
const colorCode = (color: string): number => COLORS.indexOf(color)
// resistor-color solution END

export const decodedValue = ([tens, ones]: string[]): number =>
  colorCode(tens) * 10 + colorCode(ones)


// ----------------------------------------------------------------------

// Third Solution

interface Color { [c: string]: number }

const colorsMap: Color = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedValue(colors: string[]): number {
  // This exercise you do not need validation for minimum values
  if (colors.length < 2) {
    throw 'At least two colors need to be present';
  }

  const [first, second] = colors;

  return Number(`${colorsMap[first]}${colorsMap[second]}`);
}