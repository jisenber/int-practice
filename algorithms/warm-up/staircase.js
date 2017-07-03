function staircase(n) {
  for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
    //.repeat is a string method that repeats a given string by a given number
  }
}
