/* Write a Javascript Function that accepts a string as a parameter and finds the longest
word in the string.

1. Define a Javascript function that accepts a string as a parameter. 
2. I would use the split method to split the string passed in as a parameter into an array named
 arrayOfWords.
3. After creating the words array I would write define a variable called longestWord and set
it equal to an empty string.
4. I would then go ahead and and write a for of statement with some logic that compares the words
in the array with the word in the longestWord variable.
5. Once finished with the for Of statement I would return longestWord then console.log my 
longestWordInString function input my argument and let my function 
*/

function longestWordInString(myString) {
  let words = myString.split (' ');
  let longestWord = '';

  for (const word of words) {
    if(word.length > longestWord.length){
      longestWord = word
    }
  }

  return longestWord;

}

console.log(longestWordInString('Hi my name is Peter'));



