function getAverage(grades) {

  let total = 0;
  for (const grade of grades) {
    total = total + grade;
  }
  const avgGrade = total / grades.length;
  return avgGrade;

}

//const testScores = getAverage([100, 80, 90]);
//console.log(testScores);

function getGrade(score) {
  
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else if (score >=0) {
    return 'F';
  }
}

//const grade = getGrade(95);
//console.log(grade);

function hasPassingGrade(score) {

  if (getGrade(score) !== 'F') {
    return true;
  } else {
    return false;
  }

}

//const success = hasPassingGrade(false);
//console.log(success);

function studentMsg(grades, studentGrade) {
  
  const avg = getAverage(grades);
  const pass = hasPassingGrade(studentGrade);
  const grade = getGrade(studentGrade);
  const msg = `Class average: ${avg}. Your grade: ${grade}.`;

  if (pass) {
    return (msg + " You passed the course.");
  } else {
    return (msg + " You failed the course.");
  }

}

const classGrades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
const myGrade = 37;
const msg = studentMsg(classGrades, myGrade);
console.log(msg);