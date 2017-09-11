/*
Steve has a string s, consisting of n lowercase letters in one operation, he can delete any pair of adjacent letters with the same value


*/


function super_reduced_string(s){
    let stringArr = s.split('')
    let answer = []

    for (let i = 0; i < s.length + 1; i++) {
        if(stringArr[0] === stringArr[1]) {
            stringArr.shift()
            stringArr.shift()
        } else {
            answer.push(stringArr[0])
            stringArr.shift()
        }
    }
    if(answer.length) {
      return answer.join('')
    } else {
        return 'Empty String'
    }
}

function reduceMe(string) {
    if (super_reduced_string(s) !== 'Empty String')
}
