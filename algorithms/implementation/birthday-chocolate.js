/*
Lilly has a chocolate bar consisting of a row of n squares where each square has an integer written on it. She wants to thsare it with Ron for his birthday, which falls on month m and day d. Lily wants to give Ron a piece of chocolate only it it contains m consecutive square integers sum to d

given m, d and the sequence of integers written on each square of Lily's chocolate bar, how many different ways can lilly break off a piece of chocolate to gvie to ron

Print an integer denoting the total number of ways that Lily can give a piece of chocolate to Ron

1,2,1,3,2
3 = d
2 = m

= 2


set a counter at 0
put a pointer at arr[0] and one at arr[m]
slice the array to get the elements
reduce it to add them all up
check to see if it equals the target

while (arr[m])
arr.slice(0,m)

*/

function solve(n, s, d, m){
  let pointer = 0;
  let counter = 0;
  while(s[m-1]) {
    let seqPiece = s.slice(pointer, m);
    let sum = seqPiece.reduce(function(a,b) {
      return a+b;
    });
    if (sum === d) {
      counter +=1;
      m += 1;
      pointer += 1;
    } else {
      m += 1;
      pointer += 1;
    }
  }
  return counter;
}
