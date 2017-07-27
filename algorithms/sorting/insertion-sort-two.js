/*

this problem asks you to implement insertion sort and print out the array every time an element is placed at it's correct position

*/
//TODO: this insertion sort implementation is not complete. I will finish it soon.


//this is an example of bubble sort
    let arrInput = input.split("\n")
    stringArr = arrInput[1].split(' ')
    let array = stringArr.map(function(ele) {
        return parseInt(ele)
    })

    for (let pointer = 0; pointer < array.length; pointer++) {
      for (let rover = 0; rover < array.length; rover++) {
        if (array[pointer] > array[rover]) {
          let temp = array[rover]
          array[rover] = array[pointer]
          array[pointer] = temp
        }
      }
      console.log(array)
    }
  }

//this is an example of insertion sort
//insertion sort looks at each element within a list and compares it with the item before. If the item before is larger, then they are swapped. This continues until the item is smaller at which point we do the same for the next element in the list

  function processData(input) {
      let arrInput = input.split("\n")
      stringArr = arrInput[1].split(' ')
      let array = stringArr.map(function(ele) {
          return parseInt(ele)
      })

      //start iterating over the array, strating at the first element
    for (let i = 1; i < array.length; i++) {
      let temp = array[i] //temporary variable on the array element
      let j = i - 1 //temp varibale in the element before the array element
      while(j >=0 && array[j] > temp ) { // run the code below if the index of i-1 is greater than or equal to 0 (i.e. at the beginning of the array) AND the value of array[j] is greater than the value of array[i]
        array[j + 1] = array[j] //the element after j is replaced with j
        j--
      }
      array[j + 1] = temp //when broken out of while loop, element after j is assigned to array[i]
      console.log(array)
    }
  }
