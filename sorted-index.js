// This function returns the lowest possible index
// a value can have in array which has
// an ascending order

function getIndexToIns (arr, num) {
  arr.sort(function(a, b){return a-b});

  const index = arr.findIndex(value => value >= num);

  return index === -1 ? arr.length : index;
}

const evenNums = [2, 4, 6, 8, 10];
const indexOf5 = getIndexToIns(evenNums, 5);
console.log(`The lowest possible index for 5 in this array of even number from 2 to 10 is: ${indexOf5}`)