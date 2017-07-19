/*
Marie wants to travel on the 256th day of the year during a year in the inclusive range from 1700 to 2700.

for any year y, print the date of the 256th

Feb has 29 days during a leap year
1700 - 1917 - Julian calendar

1918: February 14 was the 32nd day of the year

Julian calendar:  leap year every 4 years
Gregorian calendar: divisible for 400 OR divisibel for 4 and not 100

date should be printed in format: 12.09.2016

stragety: define a pattern that fits all cases and put it in a helper function. put all the conditions for years and whatnot into the main solve function
*/
function solve(year) {
  let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let dayCounter = 0
  let month = 1
  let day = 256
  if (year <= 1917) {
    if (year % 4 === 0) {
      dayCounter += 1
      getDays(day, month, monthArr, year, dayCounter)
    }
    return getDays(day, month, monthArr, year, dayCounter)
  } else if (year === 1918) {
    monthArr[1] = 15
    getDays(day, month, monthArr, year, dayCounter)
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      dayCounter += 1
      return getDays(day, month, monthArr, year, dayCounter)
    } else {
      getDays(day, month, monthArr, year, dayCounter)
    }
  }
}

function getDays(day, month, monthArr, year, dayCounter) {
  for (let i = 0; i < monthArr.length; i++) {
    if (day - monthArr[i] > 0) {
      dayCounter += monthArr[i]
      day -= monthArr[i]
      month += 1
    } else {
      let correctDay = (256 - dayCounter)
      console.log(`${correctDay}.0${month}.${year}`)
      return
    }
  }
}

solve(1918)
