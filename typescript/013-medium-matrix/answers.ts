// First solution

export class Matrix {
  readonly rows: number[][]
  readonly columns: number[][]

  constructor(text: string) {
    this.rows = text.split('\n').map((row) => {
      return row.split(/\s+/).map(Number)
    })

    this.columns = this.rows[0].map((_, i) => {
      return this.rows.map((row) => row[i])
    })
  }
}


// ------------------------------------------------------------------------------------

// Second solution

export class Matrix{
  input: string

  constructor(input: string) {
    this.input = input
  }

  get rows(): number[][] {
    return this.input.split('\n').map(x => x.split(" ")).map(x => x.map(x => +x))
  }

  get columns(): number[][] {
    let matrix = this.rows
    let cols: number[][] = [];
    for (let i: number = 0; i < matrix[0].length; i++){
      cols[i] = matrix.map(x => x[i])
    }

    return cols
  }
}


// ------------------------------------------------------------------------------------

// Third solution

type Array2D = number[][] | undefined[][];

export class Matrix {
  
  private rows: Array2D;
  private columns: Array2D;
  public readonly height: number;
  public readonly width: number;

  constructor(str: string) {
    this.rows = this.getRows(str);
    this.height = this.rows.length;
    this.width = this.rows[0].length;
    this.columns = Matrix.emptyMatrix(this.width, this.height);
    
    for(let i = 0; i < this.height; i++){
      for(let j = 0; j < this.width; j++){
        this.columns[j][i] = this.rows[i][j];
      }
    }
    
  }

  private getRows(str: string): Array2D{
    return str.split('\n').map((row) => row.split(' ').map(Number));
  }
  
  static emptyMatrix(width: number, height: number): Array2D {
    const matrix = [];
    for(let i = 0; i < height; i++) {
        matrix.push(new Array(width));
    }
    return matrix;
  }
  
}


// ------------------------------------------------------------------------------------

// Fourth solution

export class Matrix {
  public matrix: string;
  constructor(matrix: string) {
    this.matrix = matrix;
  }

  get rows(): number[][] {
    return this.matrix.split('\n').map(nums => nums.split(' ').map(row => +row))
  }
  
  get columns(): number[][] {
    return this.rows.map((firstIteration, index) => this.rows.map(secondIteration => secondIteration[index]))
   }
}
