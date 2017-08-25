function processData(input) {
    let arrInput = input.split("\n")
    stringArr = arrInput[1].split(' ')
    let searchableArr = stringArr.map(function(ele) {
        return parseInt(ele)
    })
    let numToInsert = searchableArr.pop()
    for (let i = (searchableArr.length - 1); i > -1; i--) {
        if (searchableArr[i] > numToInsert) {
            searchableArr[i + 1] = searchableArr[i]
            console.log(searchableArr.join(' '))
        } else {
            searchableArr[i + 1] = numToInsert
            console.log(searchableArr.join(' '))
            return
        }
    }
    searchableArr[0] = numToInsert //this code will only run if the number is the smallest in a given array
    console.log(searchableArr.join(' '))
}
