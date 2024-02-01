export function score(x: number, y: number): number {
  let radius = (x ** 2 + y ** 2) ** 0.5
  let points = 0

  if (radius <= 1) {
    points = 10
  } else if (radius <= 5) {
    points = 5
  } else if (radius <= 10) {
    points = 1
  }
  return points
}
