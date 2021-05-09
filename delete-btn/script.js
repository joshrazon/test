// create delete function
let buttons = document.querySelectorAll('.blue');

function createLi(event) {
  event.target.remove();
  console.log(event)
}

function erased() {

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createLi)
  }


}

erased();



// links
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll