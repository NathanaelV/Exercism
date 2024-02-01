export function hey(message: string): string {
  let lastLetter:string = message.slice(-1)
  message = message.trim()

  if (message === '') {
    return 'Fine. Be that way!'
  } else if (/^[^a-z]+$/.test(message) && (lastLetter === '!' || /[A-Z]/.test(lastLetter))) {
    return 'Whoa, chill out!'
  } else if (/^[A-Z\s?]+$/.test(message)) {
    return "Calm down, I know what I'm doing!"
  } else if (message.at(-1) === '?') {
    return 'Sure.'
  }

  return 'Whatever.'
}
