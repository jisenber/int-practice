function processData(input) {
    let arrInput = input.split("\n")
    stringArr = arrInput[1].split(' ')
    let array = stringArr.map(function(ele) {
        return parseInt(ele)
    })
  for (let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    while(j >=0 && array[j] > temp ) {
      array[j + 1] = array[j]
      j--
    }
    array[j+1] = temp
    console.log(array.join(' '))
  }
}
