/*

Sunny and Johnny take a trip to the ice cream parlor,

m dollars are pooled for ice cream
n flavors offered at parlor
each flavor i numered sequentially with a unique ID from 1 to n at cost c
t trips

they want to spend their entire pool of money during their trip

For each trip to the parlor, print the ID numbers for the two types of ice cream that sunny and johnny should purchase

2 - trips to the parlor

4 - pooled money
5 - flavors
1 4 5 3 2 - cost of each respective flavor

4
4
2 2 4 3

[2,4,5,[1,4,5,3,2],4,4,[2,2,4,3]]

*/
// let trip2 = '2 2 4 3'
//
// let prices = trip2.split(' ')
// let newPrices = prices.map(function(item) {
//   return parseInt(item)
// })
// console.log(newPrices);
//

//[ '4', '5', '1 4 5 3 2' ]

function processData(input) {
  //  let parsedInput = parseData(input)
   input.forEach(function(trip) {
       let pooled = parseInt(trip[0])
       let flavors = parseInt(trip[1])
       prices = trip[2].split(' ')
       parsedPrices = prices.map(function(item) {
           return parseInt(item)
       })
       let references = maximizeValue(pooled, parsedPrices)
       console.log(references);
   })
}

function maximizeValue(target, array) {
    let newArr = []
    let checkAgainst = array.shift()
    for (var i=0; i<array.length; i++) {
        if (checkAgainst + array[i] === target) {
            newArr.push(checkAgainst, array[i])
            return newArr
        }
    }
    return maximizeValue(target, array)
}

processData([ [ '4', '5', '1 4 5 3 2' ], [ '4', '4', '2 2 4 3' ] ])
