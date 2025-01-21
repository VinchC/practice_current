const arr = ['flick', 'chocolate', 'adventure', 'sunshine'];

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
