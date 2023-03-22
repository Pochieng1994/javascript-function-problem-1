/* Create an object, then write a JavaScript function that checks whether an object contains the 
specified key.
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





