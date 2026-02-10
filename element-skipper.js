function dropElements(arr, func) {
  for (const val of arr) {
    if (func(val)) {
      return arr.slice(arr.indexOf(val));
    }
  }
  return [];
}

const arr1 = dropElements([1, 2, 3, 4], function(n) {return n > 5;});

console.log(arr1);