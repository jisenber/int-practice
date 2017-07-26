//consider an arrya of numeric strings, unsorted, where each string is a positive number with anywhere from 1 to 1,000,000 digits

//Sort the arrays elements in ascending order of their real world integer value

//strategy:  sort the array, then print the each integer on a newline.

//EDIT:  Now I know that JavaScript numbers are all floating point numbers and that if one wants to display a comically large number, they should use an outside library. If nothing else, this exercise was a lovely practice in learning more about how JS intreprets big numbers, and a practice round of good ol' merge sort. 


function mergeSort (array) {
  if (array.length <= 1) {
    return array
  }
  let middle = (Math.floor(array.length/2))
  let leftSide = array.slice(0, middle)
  let rightSide = array.slice(middle)

  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(left, right) {
  let sorted  = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  while (left.length) {
    sorted.push(left.shift())
  }
  while (right.length) {
    sorted.push(right.shift())
  }
  return sorted;
}

console.log(mergeSort([0,7,8,3,5,7,3,6,4,9]))
