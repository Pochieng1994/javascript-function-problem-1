/* Create an object, then write a JavaScript function that checks whether an object contains the 
specified key.
1. I would create an object.
2. I would then define a function with 2 parameters object and key.
3. I would finally pass an if else statement using the hasOwnProperty() Method this condition would check to
see if a object that is passed in has a specified key. If it does then a message stating
The Key exists in the object will display to the console if not then a message stating The Key does
not exist in the object will display in the console. 
*/

const countries = {
  kenya: 'Nairobi',
  russia: 'Moscow',
  usa: 'Washington DC',
  egypt: 'Cairo',
}

function checkForKey(object, key) {
  if (object.hasOwnProperty(key)) {
    console.log('The Key Exists in the Object')
  } else{
    console.log('The Key does not exist in the Object')
  }
}





