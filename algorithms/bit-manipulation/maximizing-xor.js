/*

Given 2 integers L and R, find the maximal value of A xor B, where A and B satisfy the conditions of L <= A <= B <= R

nested for-loop where you do XOR operations under the conditions stated above
if the result of any operation is greater than the maxXOR (set at 0 to start) then make that the new maxXor

below might be a naiive solution since its runtime is n^2

*/

function maxXor(l, r) {
  let largestXor = 0
  for (let i = l; i <= r; i++ ) {
    for (let j = i; j <= r; j++ ) {
      if ((i ^ j) > largestXor) {
        largestXor = i ^ j
      } else {
        continue;
      }
    }
  }
  return largestXor
}
