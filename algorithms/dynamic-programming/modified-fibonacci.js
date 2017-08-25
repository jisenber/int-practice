//DOES NOT PASS TEST, however that is because of JavaScript's limitation on printing numbers greater than 53 bits

//this is fibbonacci implementation where Ti+2 = Ti + Math.Pow(Ti+1, 2)

var lookupTable = { }

process.stdin.on("end", function () {
  var arrInput = input.split(' ');
  var numArr = arrInput.map(function(ele) {
  return parseInt(ele);
  })


  lookupTable = {"1":numArr[0], "2":numArr[1]};
  console.log(modFib(numArr[2]));
});

function modFib(n) {
  if(n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (!lookupTable[n-1]) {
    lookupTable[n-1] = modFib(n-1);
  }
  if(!lookupTable[n-2]) {
    lookupTable[n-2] = modFib(n-2);
  }
  return (Math.pow(lookupTable[n-1],2) + lookupTable[n-2]);
}
