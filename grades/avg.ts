// npx ts-node avg.ts

import data from "./json/grades.json";

let gradesByQuarter: Array<any> = data.quarters;

function moyenne(gradesByQuarter: Array<any>) {
  let studentInfo: Array<any> = [];
  let studentName: string = "";
  let quarterName: string = "";
  let studentCourses: Array<any> = [];
  let sentence0: string = "";
  let sentence1: string = "";
  let sentence2: string = "";

  for (let g = 0; g < gradesByQuarter.length; g++) {
    quarterName = gradesByQuarter[g].name;
    sentence0 = `Voici les résultats du ${quarterName} trimestre : `;
    studentInfo.push(sentence0);
    let quarterStudent: Array<any> = gradesByQuarter[g].students;
    for (let h = 0; h < quarterStudent.length; h++) {
      studentName = quarterStudent[h].name;
      studentCourses = quarterStudent[h].courses;
      let averages: any[] = [];
      let average: any = 0;

      for (let i = 0; i < studentCourses.length; i++) {
        let totalGrades: number = 0;
        let coeffs: number = 0;
        let x: Array<any> = studentCourses[i].grades;
        if (x.length > 1) {
          for (let j = 0; j < x.length; j++) {
            totalGrades =
              totalGrades + ((x[j].value * 20) / x[j].denom) * x[j].coeff;
            coeffs = coeffs + x[j].coeff;
          }
        } else {
          totalGrades = ((x[0].value * 20) / x[0].denom) * x[0].coeff;
          coeffs = x[0].coeff;
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
      sentence1 = `Le détail des moyennes de ${studentName} pour le ${quarterName} trimestre est le suivant : `;
      sentence2 = `La moyenne générale de ${studentName} pour le ${quarterName} trimestre est de : ${average} sur 20.`;
      studentInfo.push(sentence1, averages, sentence2);
    }
  }
  return studentInfo;
}

console.log(moyenne(gradesByQuarter));
