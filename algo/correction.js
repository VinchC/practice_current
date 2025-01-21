// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
const arr = ["flick", "chocolate", "adventure", "sunshine"];

function flickSwitch(arr) {
  let a = [];
  let newSwitch = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      newSwitch = !newSwitch;
    }
    a.push(newSwitch);
  }

  return a;
}

console.log(flickSwitch(arr));

// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
const s1 = "-+-+-+";
const s2 = "-+-+-+";

function neutralise(s1, s2) {
  if (s1.length != s2.length) {
    return "The strings should be the same lengths";
  }

  let news1 = s1.split("");
  let news2 = s2.split("");
  let arr = [];

  for (let i = 0; i < news1.length; i++) {
    if (news1[i] != news2[i]) {
      arr.push("0");
    } else if (news1[i] == news2[i] && news1[i] == "+") {
      arr.push("+");
      // } else if (news1[i] == news2[i] && news1[i] == "-") {
    } else {
      arr.push("-");
    }
  }

  return arr.join("");
}

console.log(neutralise(s1, s2));

// https://www.codewars.com/kata/558f9f51e85b46e9fa000025
const n = 10;

function differenceOfSquares(n) {
  let a = 0;
  for (let i = 1; i <= n; i++) {
    a += i;
  }

  let b = 0;
  for (let j = 1; j <= n; j++) {
    b += j * j;
  }
  return a * a - b;
}

console.log(differenceOfSquares(n));

// Palindrome
const wordTest = "elle";
function isPalindrome(word) {
  return word == word.split("").reverse().join("");
}
console.log(isPalindrome(wordTest));

// find max value in array without max function
let arrayY = [6, 8, 10, 200, 100];

function findMax(arrayX) {
  let max = 0;
  for (i in arrayX) {
    if (arrayX[i] > max) {
      max = arrayX[i];
    }
  }
  return max;
}
console.log(findMax(arrayY));

// Even numbers between 1 and 100
function evenNumbers() {
  let even = [];
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
  return even;
}
console.log(evenNumbers());

// Odd numbers between 1 and 100
function oddNumbers() {
  let even = [];
  for (let i = 1; i < 101; i++) {
    if (i % 2 != 0) {
      even.push(i);
    }
  }
  return even;
}
console.log(oddNumbers());

// get distance on earth
function getKmDistance(lat1, lng1, lat2, lng2) {
  const r = 6371;
  const p = Math.PI / 180;

  const a =
    0.5 -
    Math.cos((lat2 - lat1) * p) / 2 +
    (Math.cos(lat1 * p) *
      Math.cos(lat2 * p) *
      (1 - Math.cos((lng2 - lng1) * p))) /
      2;
  return 2 * r * Math.asin(Math.sqrt(a));
}
console.log(getKmDistance(48.866669, 2.41667, 48.853, 2.35));

// https://www.codewars.com/kata/65ba420888906c1f86e1e680
function collinearity(x1, x2, y1, y2) {
  return x1 * y2 == x2 * y1;
  return (y2 == 0 && y1 == 0) || (x2 == 0 && x1 == 0) || x2 / x1 === y2 / y1;
}

console.log(collinearity(1, 2, 2, 4));

// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;

    case "-":
      return value1 - value2;
      break;

    case "*":
      return value1 * value2;
      break;

    case "/":
      return value1 / value2;
      break;

    default:
      return "Wrong parameters";
  }
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

let sentencex = "This website is for losers LOL!";

function disemvowel(str) {
  let newStr = str.replace(/[aeiou]/gi, "");

  return newStr;
}

console.log(disemvowel(sentencex));

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

let sentence = "aaa Bonjour Pops Dollar AAAAAAAAAAAAAA";

function findShort(s) {
  let array = s.split(" ");
  let shortest = 100000000;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length < shortest) {
      shortest = array[i].length;
    }
  }
  return shortest;
}

console.log(findShort(sentence));

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

const arrayNumbers = [1, 5.2, 4, 0, -1];

function sum(numbers) {
  "use strict";
  let total = 0;
  numbers.forEach((e) => {
    total = total + e;
  });
  return total;
}

console.log(sum(arrayNumbers));

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;

  if (input == null || input.length == 0) return [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) positive++;
    else negative += input[i];
  }

  return [positive, negative];
}

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  const positiveCount = input.filter((e) => e > 0).length;
  const negativeSum = input
    .filter((e) => e < 0)
    .reduce((total, current) => total + current, 0);
  return [positiveCount, negativeSum];
}

function invert(array) {
  return array.map((x) => -x);
}

function breakChocolate(n, m) {
  if (n == 0 || m == 0) {
    return 0;
  } else {
    return n * m - 1;
  }
}

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += 1 / (1 + i * 3);
  return sum.toFixed(2);
}

function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5); //each loop iteration pulls the next 5 digits into a substring
    if (Number(number) > answer) {
      //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  const strWords = str.split(" ");
  const reversedWords = [];

  strWords.forEach((element) => {
    const wordReversed = element.split("").reverse().join("");
    reversedWords.push(wordReversed);
  });

  return reversedWords.join(" ");
}

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

var uniqueInOrder = function (iterable) {
  const unique = [];
  for (const element of iterable) {
    if (!unique.length || element !== unique[unique.length - 1]) {
      unique.push(element);
    }
  }
  return unique;
};

//www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  const result = friends.filter((friend) => friend.length == 4);
  return result;
}

//www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}

//www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
  return array.map((x) => x * -1);
}

//www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
    //   } else {
    //     return true;
  }
}

// Fundamentals
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
function opposite(number) {
  return -number;
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  return s.repeat(n);
}

// https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
function boolToWord(bool) {
  if (bool == true) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(boolToWord(true));

// https://www.codewars.com/kata/remove-first-and-last-character
function removeChar(string) {
  const array = string.split("");
  const newArray = array.slice(1, -1);
  const newString = newArray.join("");
  return newString;
}

console.log(removeChar("Bonjour"));

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(string) {
  let total = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let newArray = string.split("");
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (newArray[i] == vowels[j]) {
        total++;
      }
    }
  }
  return total;
}

console.log(getCount("abracadabra"));

// https://www.codewars.com/kata/get-the-middle-character
function getMiddle(string) {
  let middle = string.length / 2 - 1;
  if (string.length % 2 == 0) {
    return string.substring(middle, middle + 2);
  } else {
    return string.substring(middle + 1, middle + 2);
  }
}

console.log(getMiddle("aeiouy"));

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/
let string = prompt("Which sentence do you want to modify ?");

String.prototype.toJadenCase = function () {
  let newArray = this.split(" ");
  let secondArray = [];
  for (let i = 0; i < newArray.length; i++) {
    const newString =
      newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
    secondArray.push(newString);
  }
  let modifiedString = secondArray.join(" ");
  return modifiedString;
};

console.log(capitalize(string));

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/
let string2 = "ZpglnRxqenU";

function accum(s) {
  let array = s.split("");
  let secondArray = [];
  for (let i = 0; i < array.length; i++) {
    const newString = array[i].repeat(i + 1);
    const majString =
      newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase();
    secondArray.push(majString);
  }
  let thirdArray = secondArray.join("-");
  return thirdArray;
}

console.log(accum(string2));

// https://www.codewars.com/kata/find-the-odd-int
const myArray = [1, 1, 1, 2, 2, 2, 5, 5, 6, 6, 8, 8, 9, 9];

function findOdd(array) {
  let newArray = [];
  let totalItem = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] == array[i]) {
      totalItem++;
    }
  }
  return total;
}

console.log(returnCount(myArray));

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
const opposite = (array) => array.map((x) => x * -1);

// https://www.codewars.com/kata/keep-hydrated-1
function litres(time) {
  return Math.floor(time * 0.5);
}

// https://www.codewars.com/kata/dollars-and-cents
function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(returnDollars(10));

// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
function fuelPrice(litres, pricePerLitre) {
  let discount;
  if (litres < 2) {
    discount = 1;
  } else if (litres < 4) {
    discount = 0.05 * litres;
  } else if (litres < 6) {
    discount = 0.1 * litres;
  } else if (litres < 8) {
    discount = 0.15 * litres;
  } else if (litres < 10) {
    discount = 0.2 * litres;
  } else {
    discount = 0.25 * litres;
  }
  const total = litres * pricePerLitre - discount;
  return Number(total.toFixed(2));
}

console.log(fuelPrice(8, 2.5));

// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
function breakChocolate(n, m) {
  if (n == 0 || m == 0) {
    return 0;
  } else {
    return n * m - 1;
  }
}

console.log(breakChocolate(2, 1));

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += 1 / (1 + 3 * i);
  }
  return total.toFixed(2);
}

console.log(SeriesSum(0));

// https://www.codewars.com/kata/are-the-numbers-in-order
const array = [1, 3, 6];

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inAscOrder(array));

// https://www.codewars.com/kata/boiled-eggs
function cookingTime(eggs) {
  let totalTime = Math.ceil(eggs / 8) * 5;
  return totalTime;
}

console.log(cookingTime(0));

// https://www.codewars.com/kata/folding-your-way-to-the-moon

// https://www.codewars.com/kata/largest-5-digit-number-in-a-series
let numberss = "1234567890";

function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
    }
  }
  return answer;
}

console.log(solution(numberss));

//https://www.codewars.com/kata/557b5e0bddf29d861400005d/

function converter(mpg) {
  const mile = 1.609344;
  const imperialGallon = 4.54609188;
  const kpl = +((mpg * mile) / imperialGallon).toFixed(2);
  return kpl;
}

console.log(converter(10));

// simple-calculator

let a = Number(prompt("What's the first value ?"));
let b = Number(prompt("What's the second value ?"));
let operator = prompt("What's the operator ?");

function basicOp(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
      break;

    case "-":
      return a - b;
      break;

    case "*":
      return a * b;
      break;

    case "/":
      return a / b;
      break;

    default:
      return "Wrong parameters";
      break;
  }
}

console.log(basicOp(operator, a, b));

// right-price
let playerName = prompt("What's your name ?");
const rightPrice = Math.ceil(Math.random() * 10);
let number = prompt("What's the right price (between 1 and 100) ?");

while (number !== rightPrice) {
  if (parseInt(number) > rightPrice) {
    alert("It's less");
    number = prompt("What's the right price (between 1 and 100) ?");
  } else if (number < rightPrice) {
    alert("It's more");
    number = prompt("What's the right price (between 1 and 100) ?");
  } else {
    alert("Bravo");
    break;
  }
}

// money in the bank
function sayHello(name) {
  return `Hello ${name}`;
}

function bank(sayHello, withdraw, total) {
  if (withdraw <= total) {
    total -= withdraw;
    return `${sayHello}, transaction accepted, total is now ${total}`;
  } else {
    return `${sayHello}, not enough money on your account!`;
  }
}

console.log(bank(sayHello("Pops"), 60, 50));

// support boucle for and array
function countArray() {
  let total = 0;
  for (let i = 0; i < arrayNames.length; i++) {
    console.log(arrayNames[i]);
    total++;
  }
  return `Le total est de ${total}`;
}

console.log(countArray());

console.log(total);

const correctPassword = "correct";
const correctName = "user";

function login(password, userName) {
  if (password === correctPassword && userName === correctName) {
    return "Vous êtes connectée(e)";
  } else {
    return "Vous n'êtes pas connectée(e)";
  }
}

console.log(login("correct", "user"));

// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/typescript
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

console.log(mango(9, 5));

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/typescript
const arrayPlusArray = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  let total = 0;
  arr3.forEach((number) => {
    total += number;
  });
  return total;
};

console.log(arrayPlusArray(arr1, arr2));

// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/typescript
function maskify(cc) {
  let array = cc.split("");
  if (array.length >= 4) {
    for (let i = 0; i < array.length - 4; i++) {
      array[i] = "#";
    }
    cc = array.join("");
  }
  return cc;
}

console.log(maskify("126789"));

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/typescript
function abbrevName(name) {
  const arrayAbbrev = name.split(" ");
  return arrayAbbrev
    .map((initial) => initial.charAt(0).toUpperCase())
    .join(".");
}

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript - not finished
const pigIt = (a) => {
  let array = a.split(" ");
  let arrayIndex1 = [];
  for (let i = 0; i < array.length; i++) {
    arrayIndex1.push(array[i].charAt(-1).replace(array[i].charAt(0)));
    // arrayIndex1.push(array[i].charAt(0));
  }
  // return array.map((word) => word.charAt(0) == word.charAt(-1));
  return arrayIndex1;
};

console.log(pigIt("pops bifton bibine"));

// https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/typescript
function number(busStops) {
  return busStops.reduce((finalTotal, [onTheBus, offTheBus]) => {
    console.log(finalTotal);
    return finalTotal + onTheBus - offTheBus;
  }, 0);
}

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/typescript

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript
export function countSheeps(arrayOfSheep) {
  let total = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      total++;
    }
  }
  return total;
}

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

let l = [1, 2, "a", "b", 3];

function filter_list(l) {
  return l.filter((i) => typeof i == "number");
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
let alphabet = [
  {
    letter: "a",
    index: 1,
  },
  {
    letter: "b",
    index: 2,
  },
  {
    letter: "c",
    index: 3,
  },
  {
    letter: "d",
    index: 4,
  },
  {
    letter: "e",
    index: 5,
  },
  {
    letter: "f",
    index: 6,
  },
  {
    letter: "g",
    index: 7,
  },
  {
    letter: "h",
    index: 8,
  },
  {
    letter: "i",
    index: 9,
  },
  {
    letter: "j",
    index: 10,
  },
  {
    letter: "k",
    index: 11,
  },
  {
    letter: "l",
    index: 12,
  },
  {
    letter: "m",
    index: 13,
  },
  {
    letter: "n",
    index: 14,
  },
  {
    letter: "o",
    index: 15,
  },
  {
    letter: "p",
    index: 16,
  },
  {
    letter: "q",
    index: 17,
  },
  {
    letter: "r",
    index: 18,
  },
  {
    letter: "s",
    index: 19,
  },
  {
    letter: "t",
    index: 20,
  },
  {
    letter: "u",
    index: 21,
  },
  {
    letter: "v",
    index: 22,
  },
  {
    letter: "w",
    index: 23,
  },
  {
    letter: "x",
    index: 24,
  },
  {
    letter: "y",
    index: 25,
  },
  {
    letter: "z",
    index: 26,
  },
];

function alphabetPosition(text) {
  let array = text.toLowerCase().split("");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (array[i] == alphabet[j].letter) {
        newArray.push(alphabet[j].index);
      }
    }
  }
  return newArray.join(" ").toString();
}

console.log(alphabetPosition(text));
