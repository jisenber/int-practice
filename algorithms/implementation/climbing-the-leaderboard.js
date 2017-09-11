function main() {
  var n = parseInt(readLine());
  scores = readLine().split(' ');
  scores = scores.map(Number);
  var m = parseInt(readLine());
  alice = readLine().split(' ');
  alice = alice.map(Number);

  let uniqScores = uniq(scores);

  let place = (uniqScores.length - 1);
  let index = 0;

  while (alice.length && uniqScores.length) {
    if (alice[index] < uniqScores[place]) {
      console.log(uniqScores.length + 1);
      alice.shift();
    } else if(alice[index] === uniqScores[place]) {
      console.log(uniqScores.length);
      uniqScores.pop();
      place -= 1;
      alice.shift();
    } else {
      uniqScores.pop();
      place -= 1;
    }
  }
  while (alice.length) {
    console.log(1);
    alice.pop();
  }

}


function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}
