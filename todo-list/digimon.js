const digimonData = () => {
  let dataArray = [];
  let myP = document.querySelectorAll('p');

  let myListItem = document.querySelectorAll('li');
  console.log(myListItem[0].innerText)

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < myListItem.length; i++) {
        myListItem[i].innerText = data[i].name;
      }
    })




}

digimonData();