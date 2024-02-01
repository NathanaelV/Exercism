export class Robot {
  private _name:string;
  private _usedNames: Array<string>;

  constructor() {
    this._name = this.generateRandomName();
    this._usedNames = [];
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    let name: string;
    do {
      name = this.generateRandomName();
    } while (this._usedNames.includes(name))
    this._usedNames.push(name)
    this._name = name
  }

  public static releaseNames(): void {
    
  }

  private letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '1234567890';

  private generateRandomLetter(): string {
    let random_index = Math.floor(Math.random() * this.letters.length);

    return this.letters[random_index];
  }

  private generateRandomNumber(): string {
    let random_index = Math.floor(Math.random() * 10);

    return this.numbers[random_index];
  }

  private generateRandomName(): string {
    let random_text = this.generateRandomLetter() + this.generateRandomLetter();
    let random_number = this.generateRandomNumber() + this.generateRandomNumber() + this.generateRandomNumber(); 

    return random_text + random_number;
  }
}
