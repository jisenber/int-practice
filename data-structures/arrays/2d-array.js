/*

given a 6x6 2D array A, print the maximum hourglass sum found in A

an hourglass is defined as:

a,b,c
  d,
e,f,g

input is an array of 6 arrays with 6 elements each

*/

function main() {
  let answer = Number.NEGATIVE_INFINITY
  var arr = [];
  for (arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    } //everything above this was code already inserted (except for negative infinity)
    for (let j = 0; j < 4; j++) {
        let checkSum = processArrays(arr[j], arr[j+1], arr[j+2])
        if (checkSum > answer) {
            answer = checkSum
        } else {
            continue;
        }
    }
     console.log(answer)

}

function processArrays(arr1, arr2, arr3) {
    let sum = Number.NEGATIVE_INFINITY

    for (let i = 0; i < 4; i++) {
        let newSum = (arr1[i] + arr1[i+1] + arr1[i+2] + arr2[i+1] + arr3[i] + arr3[i+1] + arr3[i+2])
        if (newSum > sum) {
            sum = newSum
        } else {
            continue;
        }
    }
    return sum
}
