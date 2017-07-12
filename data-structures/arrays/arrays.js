//if given an array, read it out backwards as a series of space-separated integers

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    //everything above this is code wirtten by Hackerrank. 
    let newArr = []
    while (arr.length) {
        let last = arr.pop()
        newArr.push(last)
    }
    let answer = newArr.join(" ")
    console.log(answer)

}
