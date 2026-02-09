function pairElement(dnaSeq) {
  const pair1 = ["A", "T"];
  const pair2 = ["C", "G"];
  const dna = dnaSeq.split("");
  const newDna = [];

  for (const element of dna) {
    const newPair = [];
    if (pair1.includes(element)) {
      if (element === pair1[0]) {
        newPair.push(element, pair1[1]);
      } else {
        newPair.push(element, pair1[0]);
      }
    } else {
      if (element === pair2[0]) {
        newPair.push(element, pair2[1]);
      } else {
        newPair.push(element, pair2[0]);
      }
    }

    newDna.push(newPair);
  }

  return newDna;
}

console.log(pairElement("ATCGA"));