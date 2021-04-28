// create li
let listItem = document.createElement('li');

// get ul element
const ulElem = document.querySelector('ul');

function createLi() {
  // add inner text
  listItem.innerText = 'Child Item';
  ulElem.appendChild(listItem);
}