//calculates the difference between the sums of two diagonals on an NxN matrix

//input format is an array of arrays

function diagonals(input) {
  let sum1 = 0;
  let sum2 = 0;
  let start = 0;
  for (let j=0; j < input.length; j++) {
    sum1 += input[j][j];
  }
  for (let p = input.length-1; p >= 0; p--) {
    sum2 += input[start][p];
    start += 1;
  }
  return Math.abs(sum1 - sum2);
}
