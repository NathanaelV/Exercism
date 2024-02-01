// First solution

const answers: string[] = ["Whatever.", "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!"]

export const hey = (message: string): string => {
    const speech = message.trim()
    if (speech == "") return "Fine. Be that way!"

    const isQuestion = speech.endsWith("?") ? 1 : 0
    const isYelling = /[A-Z]+/.test(speech) && speech == speech.toUpperCase() ? 2 : 0

    return answers[isQuestion + isYelling]
}


// --------------------------------------------------------------------------------------

// Second Solution

export function hey(input: string): string {
  if (isSilence(input))  { return 'Fine. Be that way!' }
  if (isYelling(input))  {
    return isQuestion(input)
      ? "Calm down, I know what I'm doing!"
      : 'Whoa, chill out!'
  }
  if (isQuestion(input)) { return 'Sure.' }
  return 'Whatever.'
}

function isQuestion( input: string ): boolean {
  return /[?]\s*$/.test(input)
}

function isSilence( input: string ): boolean {
  return /^\s*$/.test(input)
}

function isYelling( input: string ): boolean {
  // has an uppercase letter but no lowercase letter.
  return /\p{Lu}/u.test(input) && ! /\p{Ll}/u.test(input)
}


// --------------------------------------------------------------------------------------

// Third Solution

export function hey(message: string): string {
  if(hearsBoring(message)) {
      return 'Fine. Be that way!'
  }
  if(hearsFreaky(message) && hearsInquisitive(message)) {
      return 'Calm down, I know what I\'m doing!'
  }
  if(hearsFreaky(message)) {
      return 'Whoa, chill out!'
  }

  if(hearsInquisitive(message.trimRight())) {
      return 'Sure.'
  }
  return 'Whatever.'
}


const hearsBoring = (speech: string): boolean => {
  return speech.length === 0 || /^\s*$/.test(speech)
}
const hearsFreaky = (speech: string): boolean => {
  return /[A-Z]/.test(speech) && speech === speech.toUpperCase()
}
const hearsInquisitive = (speech: string): boolean => {
  return speech.endsWith('?')
}

