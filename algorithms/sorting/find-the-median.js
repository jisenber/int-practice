//Given a list of numbers, find the median
//sort the lastBiggest
//pop n push recursively.

function processData(input) {
  let arrInput = input.split("\n");
  stringArr = arrInput[1].split(' ');
   let usableArr = stringArr.map(function(ele) {
      return parseInt(ele)
    })

   let sorted = mergeSort(usableArr)
   let median = findMedian(sorted)
   console.log(median)
}

function mergeSort(array) {
    if (array.length < 2) {
        return array
    }

    let middle = Math.floor(array.length/2)
    let leftSide = array.slice(0,middle)
    let rightSide = array.slice(middle)

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    while (left.length) {
        sortedArr.push(left.shift())
    }
    while (right.length) {
        sortedArr.push(right.shift())
    }
    return sortedArr
}

function findMedian(array) {
    while (array.length > 1) {
        array.pop()
        array.shift()
    }
    return array.join('')
}
