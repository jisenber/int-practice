/*

this problem asks you to implement insertion sort and print out the array every time an element is placed at it's correct position

*/
//TODO: this insertion sort implementation is not complete. I will finish it soon. 

function processData(input) {
    let arrInput = input.split("\n")
    stringArr = arrInput[1].split(' ')
    let searchableArr = stringArr.map(function(ele) {
        return parseInt(ele)
    })

    for (let i = 0; i < searchableArr.length; i++) {
      for (let j = 1; j < (searchableArr.length + 1); j++) {
          if (searchableArr[i] > searchableArr[j]) {
            let temp = searchableArr[j]
            searchableArr[j] = searchableArr[i]
            searchableArr[j-1] = temp
          } else {
              console.log(searchableArr.join(' '))
          }
      }
    }
}
