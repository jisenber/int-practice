//count how many letters are screwed up in a string that is supposed to just be 'SOS' repeating over and over again

var counter = 0
var arrays = []

function main() {
    var s = readLine();

    //all below if my code
    let stringArr = s.split('')

    while (stringArr.length > 0) {
    arrays.push(stringArr.splice(0, 3));
    }

    arrays.forEach(function(array) {
        if(array[0] !== 'S') {
            counter += 1
        }
        if(array[1] !== 'O') {
            counter += 1
        }
        if(array[2] !== 'S') {
            counter +=1
        }
    })
    console.log(counter)

}
