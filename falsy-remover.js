function bouncer(arr) {
  return arr.filter(Boolean);
}

const values = [false, null, 0, NaN, undefined, ""];
const newValues = bouncer(values);
console.log(newValues);

console.log(bouncer([7, "ate", '', undefined, 9, NaN]))