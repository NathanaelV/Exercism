export class DnDCharacter {
  strength: number;
  charisma: number;
  wisdom: number;
  intelligence: number;
  constitution: number;
  dexterity: number;
  hitpoints: number;

  constructor() {
    this.strength = random_value();
    this.charisma = random_value();
    this.wisdom = random_value();
    this.intelligence = random_value();
    this.constitution = random_value();
    this.dexterity = random_value();
    this.hitpoints = hitpoints_calculate(this.constitution);
  }

  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * (19 - 3)) + 3
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}

function random_value(): number {
  return Math.floor(Math.random() * (19 - 3)) + 3
}

function hitpoints_calculate(ability: number): number {
  let constitution = Math.floor((ability - 10) / 2)
  return 10 + constitution
}