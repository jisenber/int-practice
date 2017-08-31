
/*
THIS IS INCOMPLETE AT THE MOMENT

alice is trying to climb the leaderboard

player with highest score is ranked 1. Rankings decrease as you go down.

players with equal scores have the same rank.

n people on the leaderboard
each player i
m levels
each level j

after completing each level, Alice wants to know her rank

you are given an array of scores on the leaderboard, and an array of scores that alice has after each level

Strategy:

Take array of leader scores, and put them into a hash map that goes down

add each score to it's previous score

iterate down the array. if the score on the object exists, continue. if it doesn't place it on the object

*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);

    console.log(uniq(scores))
}

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/*
function appendToObj(scores) {
    let scoreObj = {}
    let trackerObj = {}
    let n = 1
    for (var i = 0; i < scores.length; i++) {
        if (!trackerObj[scores[i]]) {
            scoreObj[n] = scores[i]
            trackerObj[scores[i]] = scores[i]
            n +=1
        }
        if (Object.keys(scoreObj).length === 100) {
            return scoreObj
        }
    }
    return scoreObj
}

*/
