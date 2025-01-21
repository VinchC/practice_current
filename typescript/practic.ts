function sayHello() {
  return "Hello";
}
console.log(sayHello());

// -------------------------------------------------------------------------------------------------------------

function reverseString(str: string) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}
let sentence: string = "abcdefgh";
console.log(reverseString(sentence));

// -------------------------------------------------------------------------------------------------------------

function calculateSumInArray(array: number[]) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
let arrayNumbers: number[] = [1, 2, 3, 4];
console.log(calculateSumInArray(arrayNumbers));

// -------------------------------------------------------------------------------------------------------------

function findMaxAndMin(array: number[]) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return [max, min];
}
let variable1: number[] = [3, 7, 1, 9];
console.log(findMaxAndMin(variable1));

// -------------------------------------------------------------------------------------------------------------

function removeDuplicate(array: number[]) {
  const uniqueArray = [...new Set(array)];
  return uniqueArray;
}
let variable2: number[] = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicate(variable2));

// -------------------------------------------------------------------------------------------------------------

function flattenArray(array: any) {
  const flatArray = array.flat(2);
  return flatArray;
}
let variable3: any = [1, [2, [3, 4]]];
console.log(flattenArray(variable3));

// -------------------------------------------------------------------------------------------------------------

// function flattenArray(parameter?: any) {
//   const result = parameter.split("");
//   return result;
// }
// let variable: any = "";
// console.log(flattenArray(variable));
