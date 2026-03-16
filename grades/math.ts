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

// console.log(puissance([2, 2], [3, 2], "*"));

function triangle(x: number, y: number, z: number, name: string) {
  let vertex1: string = name[0];
  let vertex2: string = name[1];
  let vertex3: string = name[2];

  let isocele: boolean = false;
  let rectangle: boolean = false;
  let equilateral: boolean = false;

  let isoPoint: string = "";
  let rectanglePoint: string = "";
  let hypothenuseName: string = "";
  
  let adjacent1: string = "";
  let oppose1: string = "";
  let angle1: string = "";
  let adjacent2: string = "";
  let oppose2: string = "";
  let angle2: string = "";

  let hypothenuseVal: number = 0;
  let adjacent1Val: number = 0;
  let oppose1Val: number = 0;
  let adjacent2Val: number = 0;
  let oppose2Val: number = 0;

  let cosinus1: number = 0;
  let sinus1: number = 0;
  let tangente1: number = 0;

  let cosinus2: number = 0;
  let sinus2: number = 0;
  let tangente2: number = 0;

  let messageIso: string = `Le triangle ${name} n'est pas isocèle.`;
  let messageRectangle: string = `D'après la réciproque du thèorème de Pythagore, le triangle ${name} n'est pas rectangle.`;
  let messageEqui: string = `Le triangle ${name} n'est pas équilatéral.`;
  let messageTrigo: string = "";

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
      angle1 = vertex2;
      angle2 = vertex1;

      hypothenuseName = vertex1 + vertex2;
      adjacent1 = vertex2 + vertex3;
      oppose1 = vertex1 + vertex3;

      adjacent2 = vertex1 + vertex3;
      oppose2 = vertex2 + vertex3;

      hypothenuseVal = x;

      adjacent1Val = y;
      oppose1Val = z;
      cosinus1 = adjacent1Val / hypothenuseVal;
      sinus1 = oppose1Val / hypothenuseVal;
      tangente1 = oppose1Val / adjacent1Val;

      adjacent2Val = z;
      oppose2Val = y;
      cosinus2 = adjacent2Val / hypothenuseVal;
      sinus2 = oppose2Val / hypothenuseVal;
      tangente2 = oppose2Val / adjacent2Val;
    } else if (y ** 2 == x ** 2 + z ** 2) {
      rectanglePoint = vertex1;
      angle1 = vertex2;
      angle2 = vertex3;

      hypothenuseName = vertex2 + vertex3;
      adjacent1 = vertex1 + vertex2;
      oppose1 = vertex1 + vertex3;
      adjacent2 = vertex1 + vertex3;
      oppose2 = vertex1 + vertex2;

      hypothenuseVal = y;

      adjacent1Val = x;
      oppose1Val = z;
      cosinus1 = adjacent1Val / hypothenuseVal;
      sinus1 = oppose1Val / hypothenuseVal;
      tangente1 = oppose1Val / adjacent1Val;

      adjacent2Val = z;
      oppose2Val = x;
      cosinus2 = adjacent2Val / hypothenuseVal;
      sinus2 = oppose2Val / hypothenuseVal;
      tangente2 = oppose2Val / adjacent2Val;
    } else if (z ** 2 == x ** 2 + y ** 2) {
      rectanglePoint = vertex2;
      angle1 = vertex1;
      angle2 = vertex3;

      hypothenuseName = vertex1 + vertex3;
      adjacent1 = vertex1 + vertex2;
      oppose1 = vertex2 + vertex3;
      adjacent2 = vertex2 + vertex3;
      oppose2 = vertex1 + vertex2;

      hypothenuseVal = z;

      adjacent1Val = x;
      oppose1Val = y;
      cosinus1 = adjacent1Val / hypothenuseVal;
      sinus1 = oppose1Val / hypothenuseVal;
      tangente1 = oppose1Val / adjacent1Val;

      adjacent2Val = y;
      oppose2Val = x;
      cosinus2 = adjacent2Val / hypothenuseVal;
      sinus2 = oppose2Val / hypothenuseVal;
      tangente2 = oppose2Val / adjacent2Val;
    } else {
      messageRectangle;
    }
    messageRectangle = `D'après la réciproque du thèorème de Pythagore, le triangle ${name} est rectangle en ${rectanglePoint}.`;
    messageTrigo = `Dans le triangle ${name} rectangle en ${rectanglePoint}, l'hypothénuse ${hypothenuseName} est égal à ${hypothenuseVal}. Si l'angle choisi est ${angle1} alors le côté adjacent est ${adjacent1} égal à ${adjacent1Val} et le côté opposé est ${oppose1} égal à ${oppose1Val}; le cosinus(${angle1}) est égal à ${cosinus1}, le sinus(${angle1}) est égal à ${sinus1} et la tangente(${angle1}) est égale à ${tangente1}. Si l'angle choisi est ${angle2} alors le côté adjacent est ${adjacent2} égal à ${adjacent2Val} et le côté opposé est ${oppose2} égal à ${oppose2Val}; le cosinus(${angle2}) est égal à ${cosinus2}, le sinus(${angle2}) est égal à ${sinus2} et la tangente(${angle2}) est égale à ${tangente2}.`;
  }
  return (
    messageEqui +
    `\n` +
    messageIso +
    `\n` +
    messageRectangle +
    `\n` +
    messageTrigo
  );
}

console.log(triangle(4, 3, 5, "ABC"));
