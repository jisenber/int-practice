//basic quicksort

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  let pivot = array.shift();
  let left = [];
  let right = [];

  for(let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [4,6,1,3,2,8,9,6,5,7,0];

console.log(quickSort(arr));
