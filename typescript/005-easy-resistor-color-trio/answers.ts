// First solution

const ColorAry =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,] as const // need "as const" for type Color
// not needed for this exercise, but this will disallow passing e.g. 'pink' to constructor

export type Color = typeof ColorAry[number]

// inspired by https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/c6p

const ohms = [
  [1_000_000_000, "giga"],
  [1_000_000, "mega"],
  [1_000, "kilo"],
] as const

export function decodedResistorValue([band1, band2, band3]: Color[]) : string {
  let num = ((ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2)) * (10 ** ColorAry.indexOf(band3))
  // inspired by https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/c6p

  const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ""]
  return `${num / divisor} ${prefix}ohms`
}


// ---------------------------------------------------------------------------------------

// Second solution

const dict:{ [key: string]: number } = {"black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4, "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9}

export function decodedResistorValue(colours: Array<string>):string {
  var amount:string = parseInt(dict[colours[0]].toString() + dict[colours[1]].toString() + "0".repeat(dict[colours[2]])).toString()

  if (amount.endsWith("000000000")){
    amount = amount.slice(0, -9);
    amount += " gigaohms"
  } else if (amount.endsWith("000000")){
    amount = amount.slice(0, -6);
    amount += " megaohms"
  } else if (amount.endsWith("000")){
    amount = amount.slice(0, -3);
    amount += " kiloohms"
  } else {
    amount += " ohms"
  }

  return amount
}


// ---------------------------------------------------------------------------------------

// Third solution

export function decodedResistorValue([first, second, third]: string[]) {
  let colorsMap = new Map<string, number>([
      ['black' , 0],
      ['brown' , 1],
      ['red'   , 2],
      ['orange', 3],
      ['yellow', 4],
      ['green' , 5],
      ['blue'  , 6],
      ['violet', 7],
      ['grey'  , 8],
      ['white' , 9],
  ]);

  let prefixMap = new Map<number, string>([
      [3, 'kilo'],
      [6, 'mega'],
      [9, 'giga'],
  ]);

  let value: string = '';

  value =
      `${colorsMap.get(first)}${colorsMap.get(second)}${'0'.repeat(
          colorsMap.get(third)!
      )}`.replace(/^0+/, '') || '0';

  let match = value.match(/[0]*$/);
  let lastDigitsCount = match ? match[0].length : 0;
  let prefix: string | undefined = prefixMap.get(
      lastDigitsCount - (lastDigitsCount % 3)
  );

  return `${value.substring(
      0,
      value.length - lastDigitsCount + (lastDigitsCount % 3)
  )} ${prefix ?? ''}ohms`;
}
