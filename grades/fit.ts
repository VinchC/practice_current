// npx ts-node fit.ts

import data from "./json/training.json";

let trainings: Array<any> = data.trainings;

function totalWeightLifted(trainings: Array<any>) {
  let training: string = "";
  let occurrences: number = 0;
  let totalWeight: number = 0;
  let totalWeightLifted: number = 0;
  for (let h = 0; h < trainings.length; h++) {
    training = trainings[h].name;
    occurrences = trainings[h].occurences;
    let ex: Array<any> = [];
    ex = trainings[h].exercises;
    for (let i = 0; i < ex.length; i++) {
      let totalByExercise = ex[i].specs;
      for (let j = 0; j < totalByExercise.length; j++) {
        totalWeight =
          totalWeight +
          totalByExercise[j].series *
            totalByExercise[j].repeat *
            totalByExercise[j].weight;
      }
    }
  }
  totalWeightLifted = totalWeight * occurrences;
  return `Vous avez soulevé ${totalWeightLifted} kgs en réalisant l'entraînement ${training} ${occurrences} fois.`;
}

console.log(totalWeightLifted(trainings));
