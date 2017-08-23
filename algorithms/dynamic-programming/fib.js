var lookupTable = {'0':0, '2':1};


// zero-based quick fibbonacci
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  if(!lookupTable[n-1]) {
    lookupTable[n-1] = fib(n-1);
  }
  if(!lookupTable[n-2]) {
    lookupTable[n-2] = fib(n-2);
  }
  return (lookupTable[n-1] + lookupTable[n-2]);
}

//zero-based slow fibbonacci
function slowFib(n) {
  if (n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  return (slowFib(n-1) + slowFib(n-2));
}


// one-based fibbonacci
// function fib(n) {
//   if (n === 1) {
//     return 0;
//   }
//   if(n === 2) {
//     return 1;
//   }
//   var oneA = lookupTable[n-1];
//   var oneB = lookupTable[n-2];
//
//   if(!oneA) {
//     lookupTable[n-1] = fib(n-1);
//     oneA = lookupTable[n-1];
//   }
//   if(!oneB) {
//     lookupTable[n-2] = fib(n-2);
//     oneB = lookupTable[n-2];
//   }
//   return (oneA + oneB);
// }

// demonstration of how fast one function is versus the other
var dateBefore = new Date();
console.log(fib(38));
console.log(new Date() - dateBefore);
