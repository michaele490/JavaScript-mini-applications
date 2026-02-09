function titleCase(title) {
  const titleArr = title.split(" ");
  const newTitleArr = [];

  for (title of titleArr) {

    let word = '';

    for (let i=0; i < title.length; i++) {
      let letter;
      
      if (i === 0) {
        letter = title[i].toUpperCase();
        // console.log(`first letter: ${letter}`);
      } else {
        letter = title[i].toLowerCase();
      }

      word = word.concat(letter);
    }

    newTitleArr.push(word);
  }

  return newTitleArr.join(" ");
}

const job = titleCase("how tO LanD a SIX figure deVeloper role.");
console.log(job);