/*Write a Javascript function that accepts two arguments, a string and a letter and the function will count the
number of occurrences of the specified letter within the string.

1. I would define a Javascript function that takes in 2 parameters. 
2. Define create a letterCount variable inside of the function and set it equal to 0.
3. I would then proceed to write my for loop with its condition and logic.
4. I would return the letterCount 
5. I would console.log the function and input the 2 parameters in.
*/

function numberOfOccurrences(string, letter) {
  let letterCount = 0;

  for(let i = 0; i < string.length; i++) {
    if(string.charAt(i) === letter) {
      letterCount += 1;
    }
  }

  return letterCount;
}

console.log(numberOfOccurrences('Hey my name is Peter', 'e'));



