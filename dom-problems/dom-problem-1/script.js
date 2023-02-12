/* Create a basic HTML page with a P element and a button on it. Then write a Javascript function to set 
the background color of that paragraph using an "on click" event added to a button in the UI.
1. I would create my HTML file with a p tag as well as a button.
2. I would then go to my Javascript file and save the 2 elements the p and the button under 2 seperate
variables inorder to manipulate both elements.
3. I would write a function to set the background color using an onclick event. 
*/ 

const paragraph = document.querySelector('p');
const button = document.querySelector('button');

button.onclick = function setBackgroundColor() {
  paragraph.style.backgroundColor = 'red';
}

