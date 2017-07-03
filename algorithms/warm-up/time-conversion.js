//convert a 12-hour time string to a military time string

function timeConversion(s) {
  let ampm = s.substr(s.length-2);
  if(ampm === 'AM') {
    let firstTwoNums = s.slice(0,2)
    if(firstTwoNums === '12') {
      let converted = s.slice(0,8);
      let answer = converted.replace(firstTwoNums, '00')
      return answer;
    } else {
      let converted = s.slice(0, 8);
      return converted;
    }
  } else {
    let firstTwoNums = s.slice(0,2);
    if(firstTwoNums === '12') {
      let answer = s.replace(ampm, '');
      return answer;
    } else {
      let sum = 12 + parseInt(firstTwoNums);
      let converted = s.replace(firstTwoNums, sum);
      let answer = converted.replace(ampm, '');
      return answer;
    }
  }
}

console.log(timeConversion('12:45:54PM'))
