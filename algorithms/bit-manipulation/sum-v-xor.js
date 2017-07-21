/*
given an integer n, find each x such that

0 <= x <= n

n + x = n ^ x

*/

//this worked, but didn't actually take into account the math trick that this problem is. With this solution, when n gets big enough shit doesn't work.

function evaluate (x, n) {
  (if n ^ x === n + x) {
    return true
  } else {
    return false
  }
}

function solve(n) {
  let counter = 0
  for (let i = 0; i <= n; i++) {
    if (evaluate(n, i))
    counter += 1
  } else {
    continue;
  }
  return counter
}

function solution(n) {
  let long = (n >>> 0).toString(2)
  let counter = 0
  for (let i=0; i < long.length; i++ ) {
    if (long.charAt(i) === 0) {
      counter +=1
    }
  }
  let answer = Math.pow(2, counter)
  console.log(answer);
}

solution(15)
