// https://projecteuler.net/problem=1
function problem1() {
  var upperLimit = document.getElementById("input1").value;

  var naturalNumbers =[];
  var result = 0;

  for (var i = 0; i < upperLimit; i++) {
    if ( i % 3 === 0 || i % 5 === 0)
      naturalNumbers.push(i);
  }

  for (var i = 0; i < naturalNumbers.length; i++) {
    result += naturalNumbers[i];
  }
  document.getElementById("output1").innerHTML = "The the sum of all the multiples of 3 or 5 below " + upperLimit + " is: " + result;
}

// https://projecteuler.net/problem=2
function problem2() {
  var upperLimit = document.getElementById("input2").value;

  var fibonacciSequence = [1,2];
  var nextNumberInSequence = 0;
  var result = 0;

  for (var i = 1; fibonacciSequence[i] <= upperLimit; i++) {
    nextNumberInSquence = fibonacciSequence[i-1] + fibonacciSequence[i];
    if (nextNumberInSquence < upperLimit)
      fibonacciSequence.push(nextNumberInSquence);
  }

  for (var i = 0; i < fibonacciSequence.length; i++) {
    if ( fibonacciSequence[i] % 2 === 0)
      result += fibonacciSequence[i];
  }

  document.getElementById("output2").innerHTML = "The sum of the even numbers in the sequence that does not exceed " + upperLimit + " is: " + result;
}
