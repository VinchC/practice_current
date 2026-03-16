const a = "a";
const b = ":";

function sameCase(a, b) {
  if (a.match(/[^a-zA-Z]/i) || b.match(/[^a-zA-Z]/i)) {
    return -1;
  } else if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sameCase(a, b));
