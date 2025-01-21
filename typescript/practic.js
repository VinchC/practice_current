"use strict";
function sayHello() {
    return "Hello";
}
console.log(sayHello());
// -------------------------------------------------------------------------------------------------------------
function reverseString(str) {
    const reversedString = str.split("").reverse().join("");
    return reversedString;
}
let sentence = "abcdefgh";
console.log(reverseString(sentence));
// -------------------------------------------------------------------------------------------------------------
function calculateSumInArray(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
let arrayNumbers = [1, 2, 3, 4];
console.log(calculateSumInArray(arrayNumbers));
// -------------------------------------------------------------------------------------------------------------
function findMaxAndMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return [max, min];
}
let variable1 = [3, 7, 1, 9];
console.log(findMaxAndMin(variable1));
// -------------------------------------------------------------------------------------------------------------
function removeDuplicate(array) {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}
let variable2 = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicate(variable2));
// -------------------------------------------------------------------------------------------------------------
function flattenArray(array) {
    const flatArray = array.flat(2);
    return flatArray;
}
let variable3 = [1, [2, [3, 4]]];
console.log(flattenArray(variable3));
// -------------------------------------------------------------------------------------------------------------
// function flattenArray(parameter?: any) {
//   const result = parameter.split("");
//   return result;
// }
// let variable: any = "";
// console.log(flattenArray(variable));
