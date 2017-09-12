/*
Caesar's cipher rotated every letter in a string by a fixed number k, making it unreadable by his enemies. Given a string S and a number K, encrypy S and print the resulting string

*/

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

function main() {
  var n = parseInt(readLine());
  var s = readLine(); //string to encrypt
  var k = parseInt(readLine()); //k = num rotations
  //everything below this line is my own code (and the upper/lowercase letter string refs outside of the functions)
  k = k % 26;
  let encryptedString = '';

  for (let i = 0; i < s.length; i++) {
    if (checkLetter(s[i])) {
      if(s[i] === s[i].toUpperCase()) {
        encryptedString += rotateUpper(s[i], k);
      } else {
        encryptedString += rotateLower(s[i], k);
      }
    } else {
      encryptedString += s[i];
    }
  }
  console.log(encryptedString);
  return encryptedString;
}

function checkLetter(letter) {
  if (letter.match(/[a-z]/i)) {
    return true;
  } else {
    return false;
  }
}

function rotateUpper(letter, k) {
  for (let i = 0; i < k; i++) {
    if((letter === 'Z') || upperLetters.charAt((upperLetters.indexOf(letter) + i)) === 'Z') {
      return upperLetters.charAt(k - (i+1));
    }
  }
  return upperLetters.charAt(upperLetters.indexOf(letter) + k);
}

function rotateLower (letter, k) {
  for (let i = 0; i < k; i++) {
    if((letter === 'z') || lowerLetters.charAt((lowerLetters.indexOf(letter) + i)) === 'z')  {
      return lowerLetters.charAt(k - (i + 1));
    }
  }
  return lowerLetters.charAt(lowerLetters.indexOf(letter) + k);
}
