export function toRna(dna_sequence: string):string {
  let rna_sequence = ''
  for (let letter of dna_sequence) {
    if (DNA_TO_RNA.get(letter) == undefined) {
      throw new Error('Invalid input DNA.')
    }
    rna_sequence += DNA_TO_RNA.get(letter)
  }
  return rna_sequence
}

const DNA_TO_RNA = new Map<string, string>([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U']
])
