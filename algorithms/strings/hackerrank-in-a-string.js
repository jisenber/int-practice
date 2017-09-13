/*

string s contains the word hackerrank if a subsequence of the characters in s spell the word hackerrank

you must answer q quieries, where each query consists of a string s. For each query, print YES on a new line is s contains hackerrank; otherwise print NO.

strategy:
keep an array with all letters of 'hackerrank'
for each query, find the index of each letter in order and then slice the string to the index of that letters
if the letter is not found, return NO
if the index reaches beyond the end of the array, return YES
recursively call this function and iterate the index of the array once each time.
*/

//reference array for all letters in hackerrank
let hackerrankArr = ['h','a','c','k','e','r','r','a','n','k'];

//reference array for all string queries
let stringArr = [];

function main() {
  var q = parseInt(readLine());
  for(var i = 0; i < q; i++){
    var s = readLine();
    stringArr.push(s);
  }
  stringArr.forEach(function(string) {
    analyzeString(string, 0, hackerrankArr);
  });
}

function analyzeString(string, index, array) {
    //termination case if successful (index is beyond length of array)
  if (index === 10) {
    console.log('YES');
    return;
  }
    //base case if unsuccessful (letter not found)
  if (string.indexOf(hackerrankArr[index]) === -1) {
    console.log('NO');
    return;
  }
    //update the string
  string = string.slice(string.indexOf(hackerrankArr[index]) + 1);
    //update the index
  index += 1;
    //recurse
  return analyzeString(string, index, hackerrankArr);
}
