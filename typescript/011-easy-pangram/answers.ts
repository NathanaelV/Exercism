// First solution

export function isPangram(paragraph: string) : boolean {
  return new Set(paragraph  .toLowerCase()
      .replace(/[^a-z]/g, '')).size === 26;
}


// ----------------------------------------------------------------------------

// Second solution

export function isPangram(sentence: string): boolean {
  sentence = sentence.toLowerCase()
  return [..."abcdefghijklmnopqrstuvwxyz"].every(c => sentence.includes(c))
}


// ----------------------------------------------------------------------------

// Third solution

export function isPangram(sentence: string): boolean {
  return [..."abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    sentence.toLowerCase().includes(letter)
  );
}


// ----------------------------------------------------------------------------

// Forth solution
export const isPangram = (s: string): boolean => {
  const regex = /([a-z])(?!.*\1)/g;
  return (s.toLowerCase().match(regex) || []).length === 26;
};

