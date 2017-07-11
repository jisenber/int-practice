/*
Maria tracks points scored per game sequentially in an array. After each game i, she cheks to see if her score si breaks her record for most of least scored points during that season.

find the number of times she breaks her record for most and least points scored during the season


*/

function getRecord(s){
  let lowestScore = s[0];
  let highestScore = s[0];
  let lowestRecord = 0;
  let highestRecord = 0;

  for (let i = 0; i < s.length; i++) {
    if(s[i] > highestScore) {
      highestRecord += 1;
      highestScore = s[i];
    } else if (s[i] < lowestScore) {
      lowestRecord += 1;
      lowestScore = s[i];
    } else {
      continue;
    }
  }
  console.log(highestRecord, lowestRecord);
}
