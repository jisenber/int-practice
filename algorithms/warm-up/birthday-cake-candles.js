/*
Colleen is turning n years old! Therefore, she has n candles of various heights on her cake, and candle i has height height-i . Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.

Given the height-i for each individual candle, find and print the number of candles she can successfully blow out.

Input Format

The first line contains a single integer, , denoting the number of candles on the cake.
The second line contains  space-separated integers, where each integer  describes the height of candle .

Constraints

Output Format

Print the number of candles Colleen blows out on a new line.
*/



function birthdayCakeCandles(n, ar) {
  let highest = ar.shift();
  let numTallest = 1;
  for (let i = 0; i < ar.length; i++) {
    let checkMe = ar[i];
    if (checkMe > highest) {
      numTallest = 1;
      highest = checkMe;
    } else if (checkMe === highest) {
      numTallest +=1;
    } else {
      continue;
    }
  }
  return numTallest;
}

console.log(birthdayCakeCandles(10, [44, 53, 31, 27, 77, 60, 66, 77, 26, 36]))
