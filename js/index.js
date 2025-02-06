import { cards } from "./data/cards.js";

// How many cards are in the pool? Display it to the user.
const totalNumberOfCards =  cards.length;
document.querySelector('#totalNumberOfCards').innerHTML = totalNumberOfCards;

// Eventlistener on button to select a set of cards
document.querySelector('#submitCardRange').addEventListener('click', () => {
  // Read start and end question
  const start = document.querySelector('#startQuestion').value;
  const end = document.querySelector('#endQuestion').value;
  
  // Redirect to card.html with start and end as GET params 
  window.location.href = `card.html?start=${start}&end=${end}`;
});


