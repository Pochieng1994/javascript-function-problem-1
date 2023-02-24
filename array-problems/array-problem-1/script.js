/*Write a JavaScript function that takes in two parameters, an array and a number (n), 
and return the first n elements of that array. Example: If I pass in an array and the number 2,
 your function returns the first 2 elements in that arrays.

 1. I would define my function by giving it a name and assigning it the parameters of array and number.
 2.I would then set certain conditions to make sure that a valid array as well as postive integer are
 entered as parameters of the function.
 3. I would also set a condition that to make sure that the positive integer that is entered as a parameter
 does not exceed does not the array length. 
 4. If all the conditions are met then a return statement with the array slice method will be returned. 

  */

 function returnElements(array, number) {
  if(array === null || number === null) {
    return 'Please enter an array and a positive integer'
  }

  if(number < 0) {
    return 'Please enter a postive integer'
  }

  if(number > array.length) {
    return 'Please enter positive integer that is less than the array length'
  }

  return array.slice(0, number);
}

