function uniteUnique (...args) {
  let fullArr = []
  
  for (const arg of args) {
    let i = 0;
    while (i < arg.length) {
      if (fullArr.includes(arg[i])) {
        i++;
      } else {
        fullArr.push(arg[i]);
        i++;
      }
    }
  }
  
  return fullArr;
}

const footballGoats = ["Messi", "Ronaldo", "Pele"];
const boxingGoats = ["Ali", "Alvarez", "Inoue"];

const goats = uniteUnique(footballGoats, boxingGoats, [1, 3, "sixseven"]);
console.log(goats);