//find the longest substring in a long string without any repeating characters

function longestSubstring(string) {

  if(typeof(string) !== 'string') {
    return false;
  }
  var hashMap = {};
  var series = '';
  var tempSeries = '';
  var stringArr = string.split('');
  for(var i = 0; i < stringArr.length; i++) {
    if(!hashMap[stringArr[i]]) {
      hashMap[stringArr[i]] = stringArr[i];
      tempSeries += stringArr[i];
    } else {
      if (tempSeries.length > series.length) {
        series = tempSeries;
        tempSeries = '';
        hashMap = {};
      } else {
        tempSeries = '';
        hashMap = {};
      }
    }
  }
  return series;
}

console.log(longestSubstring('geeksforgeeks'));
