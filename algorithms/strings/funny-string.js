/*

String S of length N, N-1 and a String R that is the reverse of S. S is funny if the condition of s[i] - s[i-1] = r[i] - r[i-1]

strategy:
create reference to alphabet in a string
forEach(string) - run function below

reverse strings
iterate over the String with a while loop and keep incrementing i up.
as soon as something doesn't match the conditional, return not funny
if you make it through the entire while loop, return Funny



*/

var alphabet = 'abcdefghijklmnopqrstuvwxyz'

function stringReverse(string) {
    var reversed = []
    var stringArr = string.split('')
    while(stringArr.length) {
        reversed.push(stringArr.pop())
    }
    return reversed.join('')
}

function funnyString(s){
    var string = s
    var reversed = stringReverse(s)
    var i = 1
    while (i < string.length) {
        var stringIndex = alphabet.indexOf(string[i])
        var oneStringLetterBack = alphabet.indexOf(string[i-1])
        var reversedIndex = alphabet.indexOf(reversed[i])
        var oneReversedLetterBack = alphabet.indexOf(reversed[i-1])

        if(Math.abs(stringIndex - oneStringLetterBack) === Math.abs(reversedIndex - oneReversedLetterBack)) {
            i++
        } else {
            return 'Not Funny'
        }
    }
    return 'Funny'
}
//code above is mine

//code below is not mine
function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = funnyString(s);
        process.stdout.write("" + result + "\n");
    }

}
