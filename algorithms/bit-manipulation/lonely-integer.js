/*
array of n integers where all but one of the integers occurs in pairs. Every elment A occurs exactly twice except for one unique element.


//take each integer and perform a bitwise operation against all other elements
if it ever returns 0, move on to the next one.

strategy: put all the elements of the array in a hashmap. As part of that operation, check to see if the property already exists, and if it does perform a bitwise XOR on it with the current index on the loop. the lonely integer will be the only property with a value that isn't 0. 

*/

function lonelyinteger(a) {
  let hashMap = {}
  for (let i = 0; i < a.length; i++) {
    if (hashMap[a[i]]) {
      hashMap[a[i]] = (hashMap[a[i]] ^ a[i])
    } else {
      hashMap[a[i]] = a[i]
    }
  }
    for (prop in hashMap) {
      if (hashMap[prop] !== 0) {
        return hashMap[prop]
      }
    }
}
