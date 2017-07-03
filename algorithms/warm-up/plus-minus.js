function plusMinus(array) {
  let positives = 0;
  let negatives = 0;
  let zeroes = 0;
  for (let i=0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroes +=1;
    } else if (array[i] > 0) {
      positives += 0;
    } else {
      negatives += 0;
    }
    console.log(positives/array.length);
    console.log(negatives/array.length);
    console.log(zeroes/array.length);
  }
}
