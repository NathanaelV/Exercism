export function isPangram(sentence: string): boolean {
  const singleLetters = new Set();
  sentence = sentence.toLowerCase();

  for (const letter of sentence) {
    if (/[a-z]/.test(letter)) {
      singleLetters.add(letter);
    }
  }

  return singleLetters.size === 26;
}
