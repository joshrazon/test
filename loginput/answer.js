function logSubmit(event) {
  let textInput = document.getElementById('userInput');
  logInput(textInput.value)
  event.preventDefault();
  textInput.value = '';
}

function logInput(todoItem) {

  if (todoItem === '') {
    return
  }

  log.innerText = todoItem;

}

// const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

