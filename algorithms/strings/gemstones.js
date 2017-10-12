/*
John has discovered various rocks composed of various elements. Each element is represented by a lower-case Latin letter from a to z. an element can be present multiple times in a rock. An element is called a gem-element if it occurs at least once in each of the rocks

Given the list of N rocks with their compositions, display the number of gem-elements that exist in those rocks.

translation: count how many letter instances appear in all three of the sequences

Strategy: attach all the letters to a hash map where each. it will increment the value of each after it seems them. For each array though you will need to remove all the duplicate elements.

*/


function gemstones(arr){
  var noDups = [];
  var hashMap = {};
  var counter = 0;

  //remove duplicate characters from each string within the array of strings
  arr.forEach(function(string) {
    var stringArr = string.split('');
    var dupsRemoved = removeDuplicates(stringArr);
    noDups.push(dupsRemoved.join(''));
  });

  //set target that would indicate a 'gem' in that the character is found in each string
  var bingo = noDups.length;
  var firstString = noDups.shift();
  //load the hashmap with all the characters from the first string
  for (var i = 0; i < firstString.length; i++) {
    hashMap[firstString.charAt(i)] = 1;
  }
  //for all the other strings in the array, run the helper function
  noDups.forEach(function(string) {
    incrementOnHash(string, hashMap);
  });
  //for each character in the hash map, see if the value matches the target lenght
  for (var char in hashMap) {
    if (hashMap[char] === bingo) {
      counter +=1;
    }
  }
  return counter;
}

//helper function to increment the value of a character on the hash map (only if it is found, i.e. if it was on the first string)
function incrementOnHash(string, obj) {
  for (var i = 0; i < string.length; i++) {
    if(obj[string.charAt(i)]) {
      obj[string.charAt(i)] += 1;
    }
  }
}

//helper function to remove duplicates from an array
function removeDuplicates(arr) {
  var seen = {};
  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}
