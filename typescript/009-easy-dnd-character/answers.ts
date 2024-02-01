// First solution

export class DnDCharacter {
  readonly strength: number
  readonly dexterity: number
  readonly constitution: number
  readonly intelligence: number
  readonly wisdom: number
  readonly charisma: number
  readonly hitpoints: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const rolls: number[] = [...Array(4)].map(_ => this.generateRandomDiceRollScore())
    return rolls.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n)
  }

  public static getModifierFor(numberValue: number): number {
    return Math.floor((numberValue - 10) / 2)
  }

  private static generateRandomDiceRollScore(): number {
    return Math.floor(Math.random() * 6) + 1
  }
}


// ---------------------------------------------------------------------------------------

// Second solution

export class DnDCharacter {
  constitution: number = DnDCharacter.generateAbilityScore()
  strength: number = DnDCharacter.generateAbilityScore()
  dexterity: number = DnDCharacter.generateAbilityScore()
  intelligence: number = DnDCharacter.generateAbilityScore()
  wisdom: number = DnDCharacter.generateAbilityScore()
  charisma: number = DnDCharacter.generateAbilityScore()
  // Is this method available at this point in initiating the object? Are static methods + classes
  // Made available at compilation?
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)

public static generateAbilityScore(): number {
  function diceThrow() {
    return Math.ceil(Math.random() * 6)
  };

  const diceThrows = [
     diceThrow(),
     diceThrow(),
     diceThrow(),
     diceThrow()
  ]

  return diceThrows.sort().slice(1).reduce((acc, item) => acc + item)
}

public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2)
}
}


// ---------------------------------------------------------------------------------------

// Third solution