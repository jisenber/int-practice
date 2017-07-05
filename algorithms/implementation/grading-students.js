/*

every student receives a grade from 0-100
any grade less than 40 is an F

if the diff between the grade and the next multiple of 5 is less than 3, grade up to the next multiple of 5

if the value of a grade is less than 30, no rounding occurs, fail


*/

//takes in an array of grades
//
function solve(grades) {
  let newGrades = []
  for (let i = 0; i < grades.length; i++) {
    let checkMe = grades[i]
    if (checkMe < 38 || checkMe % 5 === 0 || checkMe % 5 === 1 || checkMe % 5 === 2) {
      newGrades.push(checkMe)
    } else if (checkMe % 5 === 3) {
      newGrades.push(checkMe + 2)
    } else if (checkMe % 5 === 4) {
      newGrades.push(checkMe + 1)
    }
  }
  return newGrades
}

console.log(solve([73, 67, 38, 33]));
