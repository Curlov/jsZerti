import {cards} from "./data/cards.js";

// How many cards are in the pool? Display it to the user.
const totalNumberOfCards = cards.length;
document.querySelector('#totalNumberOfCards').innerHTML = totalNumberOfCards;

// EventListener on button to select a set of cards
document.querySelector('#submitCardRange').addEventListener('click', submitCardRange);

// EventListener on keypress to select startQuestion/endQuestion
document.querySelector('#startQuestion').addEventListener('keypress', handleKeyPress);
document.querySelector('#endQuestion').addEventListener('keypress', handleKeyPress);

// Function to include EventListener on keypress
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitCardRange();
    }
}

// Function to read startQuestion/endQuestion
function submitCardRange() {
    const start = document.querySelector('#startQuestion').value;
    const end = document.querySelector('#endQuestion').value;

    // Redirect to card.html with start and end as GET params
    window.location.href = `card.html?start=${start}&end=${end}`;
}


