/*Write a Javascript function that accepts a string as a parameter and counts the number of vowels 
within the string.

1. I would start off by declaring my function naming it numberOfVowels.
2. I would then split the string into individual letters using the split method I also will lowercase the string when
splitting so that theyre in the same case as the vowels array.
3. I would create an array called vowels and I which I would put the vowels a,e,i,o,u in.
4. I would then create a variable named currentVowelCount and set it equal to 0.
5. I would then proceed to create a For loop after creating the For loop I would return the variable
currentVowelCount. Then I will console.log numberOfVowels and pass my string in as an argument.
*/

function numberOfVowels(string) {
  let letters = string.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let currentVowelCount = 0;

  for(let i = 0; i < letters.length; i++) {
    if(vowels.includes(letters[i])) {
      currentVowelCount += 1
    }
  }

  return currentVowelCount;
}

console.log(numberOfVowels('Oranges are my favorite fruit'));



