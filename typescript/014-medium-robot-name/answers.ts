// Gold Answer


// -------------------------------------------------------------------------

// First solution - All tests

/**
 * generates a random number from 0 to maximum-1
 *
 * random(5) => generates an integer 0 - 4
 *
 * @param maximum - max limit of generated number
 */
const rand = (maximum: number): number => Math.floor(Math.random() * maximum)

class NameDatabase {
  private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  private availableNames!: string[]

  constructor() {
    this.releaseNames()
  }

  public releaseNames(): void {
    this.availableNames = this.allPossibleNames()
  }

  public allPossibleNames(): string[] {
    const names = []
    for (const a of NameDatabase.ALPHABET) {
      for (const b of NameDatabase.ALPHABET) {
        for (let i = 0; i < 1000; i++) {
          names.push(`${a}${b}${i.toString().padStart(3, '0')}`)
        }
      }
    }
    return names
  }

  public fetchNewName(): string {
    if (this.availableNames.length === 0) throw 'no more names'

    const randomPosition = rand(this.availableNames.length)
    const name = this.availableNames[randomPosition]
    const lastName = this.availableNames.pop()!
    // swap the last name into the position of the name
    // we just removed (unless we happened to randomly
    // pick the very last name already)
    if (name !== lastName) this.availableNames[randomPosition] = lastName

    return name
  }
}

const RobotsDB = new NameDatabase()

export class Robot {
  private _name!: string

  public get name(): string {
    return this._name
  }

  constructor() {
    this.resetName()
  }

  public resetName(): void {
    this._name = RobotsDB.fetchNewName()
  }

  public static releaseNames(): void {
    RobotsDB.releaseNames()
  }
}


// -------------------------------------------------------------------------

// Second solution - All tests

const TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;

export class Robot {
  static usedNames: number[] = Array(TOTAL_NUMBER_OF_NAMES)
  currentName: string = '';

  public getNameByIndex(i: number): string {

    const ab = 'A'.charCodeAt(0);
    const nb = '0'.charCodeAt(0);

    const d2 = i % 10;
    const d1 = (i - d2) / 10 % 10; 
    const d0 = (i - d2 - d1 * 10) / 100 % 10; 
    const a1 = (i - d2 - d1 * 10 - d0 * 100) / 1000 % 26; 
    const a0 = (i - d2 - d1 * 10 - d0 * 100 - a1 * 1000) / 26000 % 26; 

    const name = String.fromCharCode(ab + a0) + String.fromCharCode(ab + a1) 
               + String.fromCharCode(nb + d0) + String.fromCharCode(nb + d1) + String.fromCharCode(nb + d2);

    return name;
  }


  private updateCurrentName() : void {
    let ridx: number = Math.floor(Math.random() * TOTAL_NUMBER_OF_NAMES);
    while(Robot.usedNames[ridx]) {
      ridx++;
      if( ridx >= TOTAL_NUMBER_OF_NAMES) {
        ridx = 0;
      }

    }
    Robot.usedNames[ridx] = 1;   
    this.currentName = this.getNameByIndex(ridx);
  }


  constructor() {
    this.updateCurrentName();
  }


  public get name(): string {
    return this.currentName;
  }


  public resetName(): void {
    this.updateCurrentName();
  }

  public static releaseNames(): void {
    Robot.usedNames = [];
  }
}


// -------------------------------------------------------------------------

// Third solution - All tests

const ALL_NAMES: string[] = []
let currentIndex: number

for (let a = 65; a <= 90; a++) {
  const A = String.fromCharCode(a)

  for (let b = 65; b <= 90; b++) {
    const B = String.fromCharCode(b)

    for (let c = 0; c <= 999; c++) {
      ALL_NAMES.push(A + B + String(c).padStart(3, '0'))
    }
  }
}

function shuffle(): void {
  for (let i = ALL_NAMES.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ALL_NAMES[i], ALL_NAMES[j]] = [ALL_NAMES[j], ALL_NAMES[i]];
  }
}

export class Robot {
  static releaseNames(): void {
    currentIndex = 0
    shuffle()
  }

  private myName!: string

  constructor() {
    this.resetName()
  }

  get name(): string {
    return this.myName
  }

  resetName(): void {
    if (currentIndex == ALL_NAMES.length)
      throw new Error('All names in use')
    this.myName = ALL_NAMES[currentIndex++]
  }
}

Robot.releaseNames()


// -------------------------------------------------------------------------
