function logSubmit(event) {
  let textInput = document.getElementById('userInput');
  renderTodo(textInput.value);
  event.preventDefault();
  textInput.value = '';
}

function renderTodo(todoItem) {
  if (todoItem === '') {
    return
  }

  let myList = document.getElementById('list');
  let newLi = document.createElement('li');

  // Create New Button
  let newBtn = document.createElement('button');

  // Add button properties
  newBtn.innerHTML = '&#10006;';
  newBtn.addEventListener('click', deleteTodo);
  newBtn.classList.add('close-btn');

  newLi.innerHTML = `${todoItem}`;

  // append button to li
  newLi.appendChild(newBtn);

  myList.appendChild(newLi);
}

// create deleteTodo function
function deleteTodo(event) {
  event.target.parentNode.remove()
}

// add event listener to form
form.addEventListener('submit', logSubmit);

// get the first button in the document and add delete function
let delBtn = document.querySelector('button');
delBtn.addEventListener('click', deleteTodo);
