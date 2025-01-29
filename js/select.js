import { cards } from "./data/cards.js";

const totalNumberOfCards =  cards.length;

document.querySelector('#totalNumberOfCards').innerHTML = totalNumberOfCards;

document.getElementById('submitCardRange').addEventListener('click', () => {
  const start = document.getElementById('startQuestion').value;
  const end = document.getElementById('endQuestion').value;
  
  // Werte als URL-Parameter übergeben
  window.location.href = `objectsWithClass.html?start=${start}&end=${end}`;
});
