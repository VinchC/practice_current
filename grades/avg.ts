// npx ts-node avg.ts

import data from "./json/grades.json";

let gradesByStudent: Array<any> = data.students;

function moyenne(gradesByStudent: Array<any>) {
  let studentInfo: Array<any> = [];
  let studentName: string = "";
  let studentCourses: Array<any> = [];
  const sentence1: string = "Le détail des moyennes est le suivant : ";
  let sentence2: string = "";

  for (let h = 0; h < gradesByStudent.length; h++) {
    studentName = gradesByStudent[h].name;
    studentCourses = gradesByStudent[h].courses;
    let averages: any[] = [];
    let average: any = 0;
    for (let i = 0; i < studentCourses.length; i++) {
      let totalGrades: number = 0;
      let coeffs: number = 0;
      let x: Array<any> = studentCourses[i].grades;
      for (let j = 0; j < x.length; j++) {
        totalGrades =
          totalGrades + ((x[j].value * 20) / x[j].denom) * x[j].coeff;
        coeffs = coeffs + x[j].coeff;
      }
      averages.push([
        studentCourses[i].name,
        (totalGrades / coeffs).toFixed(2),
      ]);
    }

    let y: number = 0;
    let nan: number = 0;
    for (let k = 0; k < averages.length; k++) {
      if (averages[k][1] != "NaN") {
        y = y + parseFloat(averages[k][1]);
      } else {
        nan += 1;
      }
    }
    average = (y / (averages.length - nan)).toFixed(2);
    sentence2 = `La moyenne générale de ${studentName} est de : `;
    studentInfo.push(sentence1, averages, sentence2 + average);
  }
  return studentInfo;
}

console.log(moyenne(gradesByStudent));
