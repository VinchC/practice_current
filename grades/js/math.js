function triangle(x, y, z, name) {
  let vertex1 = name[0];
  let vertex2 = name[1];
  let vertex3 = name[2];

  let isocele = false;
  let rectangle = false;
  let equilateral = false;

  let isoPoint = "";
  let rectanglePoint = "";

  let messageIso = `Le triangle ${name} n'est pas isocèle.`;
  let messageRectangle = `Le triangle ${name} n'est pas rectangle.`;
  let messageEqui = `Le triangle ${name} n'est pas équilatéral.`;

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
    messageRectangle = `Le triangle ${name} est rectangle en ${rectanglePoint}.`;
  }
  return console.log(messageEqui + `\n` + messageIso + `\n` + messageRectangle);
}

triangle(5, 4, 3, "ABC");
