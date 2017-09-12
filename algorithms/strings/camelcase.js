//make a function that counts the words in a camelCase string.

function camelCaseWordCount(string) {
  let counter = 1;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()) {
      counter += 1;
    }
  }
  return counter;
}
