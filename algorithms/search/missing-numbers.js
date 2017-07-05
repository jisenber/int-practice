//list A and list B, B was a permutation of list A. can I find the missing numbers?

//sort it, then do a double for loop

function processData(input) {
  let missing = []
  let lists = parseData(input)
  let A = lists[0].sort()
  let B = lists[1].sort()
  while (A.length && B.length) {
      let elementA = A.shift()
      let elementB = B.shift()
      if(elementA !== elementB) {
          missing.push(elementB)
          B.shift()
      } else{
          continue;
      }

  }
    while (B.length) {
        missing.push(B.shift())
    }
    let answer = missing.join(' ')
    console.log(answer)
    return answer
}

function parseData(input) {
  let lists = []
  let splitInput = input.split('\n')
  let A = splitInput[1].split(' ')
  let B = splitInput[3].split(' ')
  let intA = A.map(function(element) {
      return parseInt(element)
  })
  let intB = B.map(function(element) {
      return parseInt(element)
  })
  lists.push(intA, intB)
  return lists
}
