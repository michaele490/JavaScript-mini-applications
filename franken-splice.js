//This program teaches the best use of the splice() method
function frankenSplice(arr1, arr2, index) {
  const combinedArr = [].concat(arr2);
  console.log(`The combined array at this point: \n${combinedArr} \n`);
  console.log(`First array ${arr1} \n`);
  combinedArr.splice(index, 0, ...arr1);

  return combinedArr;
}

const surahs = ['Baqarah', 'Yusuf', 'Nisa', 'Ma\'idah'];
const reciters = ["Haitham Al Dukhan", "Alafsy", "Michael", "Sudais"];

const newArr = frankenSplice(surahs, reciters, 1);
console.log(newArr);