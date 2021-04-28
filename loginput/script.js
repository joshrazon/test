function logSubmit(event) {
  // get text input value
  console.log(userInput.value)
  userInput.value = '';
  // pass into log input function
  event.preventDefault()
  // prevent default
}

function logInput(todoItem) {
  // change h2 inner text
}


// add event listener to form
form.addEventListener('submit', logSubmit)