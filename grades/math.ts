// npx ts-node math.ts

function puissance(
  arrayNumbers: number[],
  arrayExponents: number[],
  operator: string
): string {
  let result: number = 0;
  let message: string;
  if (arrayNumbers[0] != arrayNumbers[1]) {
    result = eval(
      arrayNumbers[0] ** arrayExponents[0] +
        operator +
        arrayNumbers[1] ** arrayExponents[1]
    );
  } else {
    switch (operator) {
      case "+":
        result =
          arrayNumbers[0] ** arrayExponents[0] +
          arrayNumbers[1] ** arrayExponents[1];
        break;
      case "-":
        result =
          arrayNumbers[0] ** arrayExponents[0] -
          arrayNumbers[1] ** arrayExponents[1];
        break;
      case "*":
        result = arrayNumbers[0] ** (arrayExponents[0] + arrayExponents[1]);
        break;
      case "/":
        result = arrayNumbers[0] ** (arrayExponents[0] - arrayExponents[1]);
        break;
      default:
        message = "Cet opérateur n'est pas autorisé.";
        break;
    }
  }
  message = `Le résultat est égal à ${result}`;

  return message;
}

console.log(puissance([2, 2], [3, 2], "*"));

function triangle(x: number, y: number, z: number, name: string) {
  let vertex1: string = name[0];
  let vertex2: string = name[1];
  let vertex3: string = name[2];

  let isocele: boolean = false;
  let rectangle: boolean = false;
  let equilateral: boolean = false;

  let isoPoint: string = "";
  let rectanglePoint: string = "";

  let messageIso: string = `Le triangle ${name} n'est pas isocèle.`;
  let messageRectangle: string = `D'après la réciproque du thèorème de Pythagore, le triangle ${name} n'est pas rectangle.`;
  let messageEqui: string = `Le triangle ${name} n'est pas équilatéral.`;

  if (x == y && y == z) {
    equilateral = true;
    messageEqui = `Le triangle ${name} est équilatéral.`;
  } else if (x == y || y == z || x == z) {
    isocele = true;
    if (x == y) {
      isoPoint = vertex3;
    } else if (y == z) {
      isoPoint = vertex1;
    } else if (x == z) {
      isoPoint = vertex2;
    }
    messageIso = `Le triangle ${name} est isocèle en ${isoPoint}.`;
  } else if (
    x ** 2 == y ** 2 + z ** 2 ||
    y ** 2 == x ** 2 + z ** 2 ||
    z ** 2 == x ** 2 + y ** 2
  ) {
    rectangle = true;
    if (x ** 2 == y ** 2 + z ** 2) {
      rectanglePoint = vertex3;
    } else if (y ** 2 == x ** 2 + z ** 2) {
      rectanglePoint = vertex1;
    } else if (z ** 2 == x ** 2 + y ** 2) {
      rectanglePoint = vertex2;
    } else {
      messageRectangle;
    }
    messageRectangle = `D'après la réciproque du thèorème de Pythagore, le triangle ${name} est rectangle en ${rectanglePoint}.`;
  }
  return messageEqui + `\n` + messageIso + `\n` + messageRectangle;
}

console.log(triangle(4, 5, 3, "ABC"));
