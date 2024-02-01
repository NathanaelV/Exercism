export function age(planet: unknown, seconds: unknown): unknown {
  let age = EARTH_YEAR(seconds)
  switch (planet) {
    case 'mercury':
      age /= 0.2408467;
      break;
    case 'venus':
      age /= 0.61519726;
      break;
    case 'mars':
      age /= 1.8808158;
      break;
    case 'jupiter':
      age /= 11.862615;
      break;
    case 'saturn':
      age /= 29.447498;
      break;
    case 'uranus':
      age /= 84.016846;
      break;
    case 'neptune':
      age /= 164.79132;
      break;
  }

  return Number(age.toFixed(2))
}

const EARTH_YEAR = (sec: unknown): number => {
  return Number(sec) / 31557600
}
