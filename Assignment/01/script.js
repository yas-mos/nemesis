//Yasser Solution:

let string = "yasser";
// converting the string into an array
firstLetter = string.split("")
//fetching the first value of the array and uppercasing it + slicing the string to remove the first letter
outcome = firstLetter[0].toUpperCase() + string.slice(1, 6);
console.log(outcome);

//Course solutions:

 myString = 'developer';
// Solution 1
 myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2 (Uses string[0] instead of string.charAt(0))
 myNewString = myString[0].toUpperCase() + myString.substring(1);
 console.log(myNewString);