const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

// an <h3> with blue text that says “I’m a blue h3!”
const text = document.createElement('h3');
text.classList.add('text');
text.textContent = "I'm a blue h3!";
text.style.cssText = 'color: blue;';

/* a <div> with a black border and pink background color with the following elements inside of it:
* another <h1> that says “I’m in a div”
* a <p> that says “ME TOO!”
*/

const box = document.createElement('div');
box.classList.add('box');
box.style.backgroundColor = 'pink';
box.style.border = "5px solid black";
const boxText = document.createElement('h1');
boxText.classList.add('boxText');
boxText.textContent = "I'm in a div";
const boxParagraph = document.createElement('p');
boxParagraph.classList.add('boxParagraph');
boxParagraph.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(text);
box.appendChild(boxText);
box.appendChild(boxParagraph);
container.appendChild(box);