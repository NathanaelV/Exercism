export class GradeSchool {
  private _grades: {[key: number]: Array<string>};

  constructor() {
    this._grades = {};
  }
  roster():any {
    return this._grades;
  }

  push() {
    throw new Error("The push method is restricted.");
  }

  add(student_name: string, student_grade: number) {
    if (typeof this._grades[`${student_grade}`] == 'undefined') {
      this._grades[`${student_grade}`] = [student_name];
    } else {
      this._grades[`${student_grade}`].push(student_name);
      this._grades[`${student_grade}`].sort();
    }
  }

  grade(student_grade: number):Array<string> {
    if (typeof this._grades[`${student_grade}`] == 'object') {
      return this._grades[`${student_grade}`];
    }
    return [];
  }
}
