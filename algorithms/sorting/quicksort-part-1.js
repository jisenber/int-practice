/* create three partitions in an array based off a pivot element P. The three partitions should be l, r, and e. all l[i] < p, all r[i] > p and all e[i] === p.

given ar and p = ar[0], print out all elements in l, e, and r in resepctive order.

*/

function processData(input) {
  let arrInput = input.split("\n");
  stringArr = arrInput[1].split(' ');
   let usableArr = stringArr.map(function(ele) {
      return parseInt(ele)
    })
   let leftArr = []
   let equalArr = []
   let rightArr = []
   let e = usableArr.shift()
   equalArr.push(e)
   while(usableArr.length) {
       let index = usableArr.shift()
       if(index > e) {
           rightArr.push(index)
       } else if (index < e) {
           leftArr.push(index)
       } else {
           equalArr.push(index)
       }
   }
    let combinedArr = leftArr.concat(equalArr)
    let finalArr = combinedArr.concat(rightArr)
    console.log(finalArr.join(' '))
}
