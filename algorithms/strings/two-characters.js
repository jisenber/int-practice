/*
String t consists of two distinct alternating characters

you can convert s to string t by deleting characters from s. if you delete one character from s, you must delete all of that character.

given s, convert it to the longest possible string t. if no string t can be formed, print 0 instead

strategy:

count all the characters
pair the ones that are plus or minus 1 of eachother
check to see if each pair is alternating
if none are alternating, print 0
*/

let stringMap = {
  a: 1,
  b: 5,
  c: 5,
  d: 2
};



// function charCount(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (!stringMap[string[i]]) {
//       stringMap[string[i]] = 1;
//     } else {
//       stringMap[string[i]] +=1;
//     }
//   }
// }

function pairArrays(object) {
  let newArr = []
  let keyArr= Object.keys(object)
  for (let i = 0; i < keyArr.length; i++) {
    if object[keyArr[i] === ] //working on it...
  }
}

pairArrays(stringMap);
