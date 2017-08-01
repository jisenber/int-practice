/*

you are given an array of n integers and a positive integer k. find and print the number is (i,j) pairs where i < j and ai + aj is divisble by k

naiive solution looks like a double for loop.

I'm not happy that it's n-squared but I'm not immediately sure how to optimize and it's almost midnight...so bed wins. 

*/

function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if((ar[i] + ar[j]) % k === 0)  {
        counter += 1;
      }
    }
  }
  return counter;
}
