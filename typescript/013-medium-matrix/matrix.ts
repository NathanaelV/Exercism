export class Matrix {
  string_matrix: string

  constructor(matrix_string: string) {
    this.string_matrix = matrix_string;
  }

  get rows(): Array<number[]> {
    var arr_matrix = this.string_matrix.split('\n');
    var resp: Array<number[]> = [];

    for (var value of arr_matrix) {
      var arr_string = value.split(' ');
      var temp_arr: number[] = arr_string.map(Number);
      resp.push(temp_arr);
    }

    return resp;
  }

  get columns(): number[][] {
    var matrix_rows = new Matrix(this.string_matrix).rows;

    var resp: Array<number[]> = []
    for (var m = 0; m < matrix_rows.length; m++ ) {
      var column: number[] = [];
      for (var n = 0; n < matrix_rows.length; n++) {
        column.push(matrix_rows[n][m])
      }
      resp.push(column)
    }


    return resp;
  }
}
