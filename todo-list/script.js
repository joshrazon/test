const pokeData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data))
}

pokeData()

// let myP = document.querySelector('p');
// console.log(myP)

// function changeElem() {

// }

// changeElem();
