 let array = [9,2,5,6,7,8,2,15,9,3,7,10,1,8];
//
// function quickSort(array, left, right) {
//   left = left || 0;
//   right = right || array.length-1;
//
//   var pivot = partitionHoare(array, left, right)
//   if(left < pivot-1) {
//     quickSort(array, left, pivot-1);
//   }
//   if(right > pivot) {
//     quickSort(array, pivot, right);
//   }
//   return array;
// }
//
//
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
//
// function partitionHoare(array, left, right) {
//   var pivot = Math.floor((left + right) / 2);
//   //run the code below as long as the left value remains less than or equal to the right value
//
//   while(left <= right) {
//     //while the left part of the array is bigger than the middle pivot value, move to the next left
//     while(array[left] < array[pivot]) {
//       left++;
//     }
//     while(array[right] > array[pivot]) {
//       right --;
//     }
//     if(left <= right) {
//       swap(array,left, right);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }
//
//
//
// console.log(quickSort(array));
// //one partition scheme


// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  // var pivot = partitionLomuto(array, left, right); // you can play with both partition
  var pivot = partitionHoare(array, left, right); // you can play with both partition

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}

// Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
function partitionHoare(array, left, right) {
  var pivot = Math.floor((left + right) / 2 );

  while(left <= right) {
    while(array[left] < array[pivot]) {
      left++;
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}
console.log(quicksort(array));
