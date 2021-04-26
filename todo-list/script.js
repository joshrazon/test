

const pokeData = () => {
  let arrayData = [];
  let myP = document.querySelectorAll('p');

  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {

      arrayData.push(data.abilities)

      console.log(arrayData[0][0].ability.name)

      for (let i = 0; i < myP.length; i++) {
        myP[i].innerText = arrayData[0][i].ability.name;
      }
    })
}

pokeData()

