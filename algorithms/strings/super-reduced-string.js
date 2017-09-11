/*
Steve has a string s, consisting of n lowercase letters in one operation, he can delete any pair of adjacent letters with the same value

Sample Case 0

Steve can perform the following sequence of operations to get the final string:

aaabccddd → abccddd
abccddd → abddd
abddd → abd
Thus, we print abd.

Sample Input 1

baab
Sample Output 1

Empty String
Explanation 1

Steve can perform the following sequence of operations to get the final string:

baab → bb
bb → Empty String
Thus, we print Empty String.

Sample Input 2

aa
Sample Output 2

Empty String

Strategy:
base case - if the input is falsy, return 'Empty String'
iterate over the string, if an element is equal to the adjacent elemment, invoke helper function and break the loop
if you're at the end of the iteration, return the string

if the for loop is broken, recursively call the function with the new string created by the helper function that takes away the two characters

*/


function super_reduced_string(s) {
  let newString = '';
  if(!s) {
    return 'Empty String';
  }
  for (let i = 0; i < s.length; i++) {
    if(s[i] === s[i+1]) {
      newString += stringChange(s, i);
      break;
    } else if (!s[i+1]) {
      return s;
    }
  }
  return super_reduced_string(newString);
}

function stringChange(string, i) {
  let leftSide = string.slice(0, i);
  let rightSide = string.slice(i+2);
  let joinString = leftSide += rightSide;
  return joinString;
}
