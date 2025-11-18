import data from "../grades.json" with { type: "json" };

let gradesByStudent = data.students;

function moyenne(gradesByStudent) {
    let studentInfo = [];
    let studentName = "";
    let studentCourses = [];
    const sentence1 = "Le nom de l'étudiant est : ";
    const sentence2 = "Le détail des moyennes est le suivant : ";
    const sentence3 = "La moyenne générale est de : ";

    for (let h = 0; h < gradesByStudent.length; h++) {
        studentName = gradesByStudent[h].name
        studentCourses = gradesByStudent[h].courses
        let averages = [];
        let average = "";
        for (let i = 0; i < studentCourses.length; i++) {
            let totalGrades = 0;
            let coeffs = 0;
            let x = studentCourses[i].grades
            for (let j = 0; j < x.length; j++) {
                totalGrades = totalGrades + ((x[j].value*20)/x[j].denom)*x[j].coeff;
                coeffs = coeffs + x[j].coeff;
            }
            averages.push([studentCourses[i].name, (totalGrades / coeffs).toFixed(2)])
        }
        
        let y = 0;
        let nan = 0;
        for (let k = 0; k < averages.length; k++) {
            if (averages[k][1] != "NaN") {
                y = y + parseFloat(averages[k][1]);
            } else {
                nan+=1;
            }
        }
        average = (y / (averages.length - nan)).toFixed(2)
        studentInfo.push(sentence1 + studentName, sentence2, averages, sentence3 + average);
    }
    return studentInfo;
}

console.log(moyenne(gradesByStudent));