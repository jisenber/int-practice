/*
An english text needs to be encrypted using the following scheme:

1. spaces are removed from the text
let the L be the length of the text

Then, the characters are written into a grid, whose rows and columns have the following constraints:

square root of length <= row <= column

each line of text should be the math.ceil(sqrt(string length))


*/

function encrypt(string) {
  let newString = '';
  let stringArr = [];
  let numColumns = Math.ceil(Math.sqrt(string.length));
  let pointer = numColumns;
  //split line of characters into proper segments
  for (let i = 0; i < string.length; i += numColumns) {
    stringArr.push(string.slice(i, pointer));
    pointer = (pointer*2);
  }
  //run helper function as many times as there are columns and add each return value to newString. After adding the return value, add a space. 
  for (let i = 0; i < numColumns; i++) {
    newString += getChars(stringArr, i);
    newString += ' ';
  }
  console.log(newString);
}

//helper that will will make a string out of the elements at point i of an array of strings
function getChars(array, pointer) {
  let chars = '';
  array.forEach(function(ele) {
    chars += ele.charAt(pointer);
  });
  return chars;
}

encrypt('haveaniceday');
