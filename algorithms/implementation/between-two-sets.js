//two sets of positive integers, A and B. positive integer x is betweens sets A and B if the following conditions are satisfied

/*
All elements in A are factors of x
x is  factor of all elements in B

Given A and B, find the number of integers that are between the two sets

first line contains two space separated integers describing the respective values of n and m, (number of elements in A and B respectively)

*/

function getTotalX(a, b){
    let counter = 0
    let potentialAnswers = []
    let highestA = a.pop()
    //create array of potential answers
    for(let i = highestA; i < b[0] + 1; i += highestA) {
        potentialAnswers.push(i)
    }
    while(potentialAnswers.length) {
        let checkMe = potentialAnswers.shift() //extract each potential answer and plug it into helper function that checks if the factor conditionals are met.
        if (factorCompare(checkMe, a, b)) {
            counter +=1
        } else {
            continue;
        }
    }

    return counter
}

//factor conditional helper function
function factorCompare (potentialAnswer, arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {
        if(potentialAnswer % arrA[i] !== 0) {
            return false
        }
    }
    for (let i = 0; i< arrB.length; i++) {
        if(arrB[i] % potentialAnswer !== 0) {
            return false
        }
    }
    return true
}
