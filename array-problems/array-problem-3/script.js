/* Define a function that takes in an array of numbers/integers and returns the sorted version of that 
array, greatest to least. (Note: do NOT use the "reverse" method.)
Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

1. I would declare a function name it and give it an array as a parameter.
2. I would then apply the sort method to the array and pass in a comparator function and I would make sure
to return b - a since I want the array that passed in as an argument to be returned in descending order.

*/

function greatestToLeast(array) {
  return array.sort(function(a, b) {return b - a});
}