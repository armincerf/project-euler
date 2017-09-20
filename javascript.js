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

function problem3() {
  var input = document.getElementById("input3").value;
  var divisor = 2;
  var workingValue = input;
  var currentLargestPrimeFactor = 1;

  while (workingValue/divisor !== 1) {
    if (workingValue % divisor === 0) {
      currentLargestPrimeFactor = divisor;
      workingValue /= currentLargestPrimeFactor;
    }
    else {
      divisor++;
    }
  }
  if (workingValue > currentLargestPrimeFactor)
    currentLargestPrimeFactor = workingValue;

  document.getElementById("output3").innerHTML ="Largest prime factor is: " + currentLargestPrimeFactor;
}
function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  var ccount = 0;
// Check whether the string is empty or not
  if(cstr==="") {
    console.log("Nothing found!");
    return false;
  }
// Check if the length of the string is even or odd 
  if ((cstr.length) % 2 === 0) {
    ccount = (cstr.length) / 2;
  } else {
// If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
      return true;
    } else {
// If the length of the string is odd ignore middle character
      ccount = (cstr.length - 1) / 2;
    }
  }
// Loop through to check the first character to the last character and then move next
  for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
    if (cstr[x] != cstr.slice(-1-x)[0]) {
      return false;
    }
  }
  return true;
}
function problem4(){
  final=0;
  var input = document.getElementById("input4").value;
  for(i = 0 ; i<input ; i++){
    for(j = 0; j<input; j++){
      if(check_Palindrome((i*j).toString())){
        if((i*j)>final){
        final = i*j;
        }
      }
    }
  }
  document.getElementById("output4").innerHTML ="Largest palindrome that can be made is " + final;
}
function problem5(){
  test = false;
  d = parseInt(document.getElementById("input5").value);
  if(d<2){
    document.getElementById("output5").innerHTML ="Please enter a number bigger than 2!";

  }
  else{
  number = d;
  while(!test){
    j = 0;
    for (var i = 1; i<d+1; i++) {
      if(number%i!==0){
        number++;
        break;
      }
      else{
        console.log(number);
        j++;
      }
    }
    if(j===d){
      test = true;
      document.getElementById("output5").innerHTML ="Smallest factor found is " + number;
    }
  }
}
}

