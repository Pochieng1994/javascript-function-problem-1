/* Define a function that takes in an array of elements and joins them together into a string 
separated by a comma with a space after the comma.
Example array: let colors = ["Red", "Green", "White", "Black"];
Should look like: "Red, Green, White, Black"
Do NOT use the "toString" method.

1.) I would start off by defining by function and naming it fromArrayToString.

*/

let arrayOfCities = ['Chiang Mai', 'Bali', 'Singapore', 'Bangkok', 'Jakarta']

function fromArrayToString(array) {
  return array.join(', ');
}

console.log(fromArrayToString(arrayOfCities));

