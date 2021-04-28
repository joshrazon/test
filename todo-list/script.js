// event handler for submit
function logSubmit(event) {
  let textInput = document.getElementById('userInput');
  renderTodo(textInput.value);
  event.preventDefault();
  textInput.value = '';
}

// create new todo item
function renderTodo(todoItem) {
  if (todoItem === '') {
    return
  }

  let myList = document.getElementById('list');
  let newLi = document.createElement('li');

  // Create New Button

  // Add button properties

  newLi.innerHTML = `${todoItem}`;

  // append button to li

  myList.appendChild(newLi);
}

// create deleteTodo function

// add event listener to form
form.addEventListener('submit', logSubmit);


// get the first button in the document and add delete function

