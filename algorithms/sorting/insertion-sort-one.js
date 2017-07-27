/*

This is part I of the insertion sort tutorial.

Given a sorted list with an unsorted number e in in the rightmost cell, write code to insert e into the array so it remains sorted.

Print the array every time a value is shifted in the array until the array if fully sorted. Goal

*/

function processData(input) {
    let arrInput = input.split("\n")
    stringArr = arrInput[1].split(' ')
    let searchableArr = stringArr.map(function(ele) {
        return parseInt(ele)
    })
    let numToInsert = searchableArr.pop()
    for (let i = (searchableArr.length - 1); i > -1; i--) {
      //start at the end of the sorted array and iterate towards the front
        if (searchableArr[i] > numToInsert) {
            searchableArr[i + 1] = searchableArr[i]
            console.log(searchableArr.join(' '))
        } else {
            searchableArr[i + 1] = numToInsert
            console.log(searchableArr.join(' '))
            return
        }
    }
    searchableArr[0] = numToInsert //this code will only run if the number to be inserted is the smallest in a given array
    console.log(searchableArr.join(' '))
}
