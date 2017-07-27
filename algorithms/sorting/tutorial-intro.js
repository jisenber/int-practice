//find the index of integer V in an array.

//it is guaranteed that V will appear in the array at least once.

function processData(input) {
    let arrInput = input.split("\n")
    let target = parseInt(arrInput[0])
    stringArr = arrInput[2].split(' ')
    let searchableArr = stringArr.map(function(ele) {
        return parseInt(ele)
    }) //everything above handles the format of the STDIN

    for (let i = 0; i < searchableArr.length; i++) {
        if(searchableArr[i] === target ) {
            console.log([i].join(''))
            return
        }
    }
}
