/*
Create a list of N empty sequences, where each sequence is indexed from 0 - N-1. to elements within each of the N sequences also use 0-indexing

query 1 x y:
1. find the sequence seq at index (x^lastAnswer % N in seqList)

2. append integer y to the sequence in seqList

query 2 x y

1. find the sequence seq at index (x^lastAnswer % N in seqList)

2. find the value of element y % length in seq and assign it to lastAnswer

3. print the new value of last answer on a new line


Input: 2 space separated integers, N (# sequences)
and Q, (number of queries)
*/


function processData(arr) {
  let lastAnswer = 0
  let s0 = [];
  let s1 = [];
  let firstLine = arr.shift();
  let numSequences = firstLine[0]; // N empty sequences
  let numQueries = firstLine[1]; // Q queries

  for (let i = 0; i < numQueries; i++) {
    //console.log(arr[i])
    if (arr[i][0] === 1) {
      executeQueryOne(arr[i], lastAnswer, s0, s1);
    } else {
      lastAnswer = executeQueryTwo(arr[i], lastAnswer, s0, s1);
    }
  }
}

function executeQueryOne(arr, lastAnswer, s0, s1) {
  if (arr[1] === lastAnswer) {     //if x === lastAnswer, x = 0
    s0.push(arr[2]);
  } else {
    s1.push(arr[2]); //if x !== lastAnswer, x = 1
  }
}

function executeQueryTwo(arr, lastAnswer, s0, s1) {
  if(arr[1] === lastAnswer) {
    lastAnswer = s0[(arr[2] % s0.length)];
    console.log('hit s0');
    console.log(lastAnswer);
    return lastAnswer
  } else {
    lastAnswer = s1[(arr[2] % s1.length)];
    console.log('hit s1');
    console.log(lastAnswer);
    return lastAnswer
  }
}

processData([ [ 2, 5 ],[ 1, 0, 5 ],[ 1, 1, 7 ],[ 1, 0, 3 ],[ 2, 1, 0 ],[ 2, 1, 1 ] ]);
