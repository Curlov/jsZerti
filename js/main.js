import { CardPool } from "./classes/CardPool.js";
import { CardBox } from './classes/CardBox.js';
import { cards } from './data/cards.js';

const loadCardsFromPool = (start, end) => {
  // Sanitize user input to avoid invalid data
  start = Math.max(1, start); // Ensure start is at least 1
  end = Math.min(cards.length, end); // Ensure end is at most cards.length
  // Create CardPool and load each card from data.js
  const cardPool = new CardPool();
  cards.forEach(card => cardPool.loadCard(card));

  // Create CardBox object and load selected cards from the pool
  const cardBox = new CardBox(1);
  cardBox.loadCards(cardPool.cards.slice(start - 1, end));

  return cardBox;
}

// If start and end positions are given in the GET params from select.html, use them 
// to choose cards from the pool. Otherwise, default to the first 10 cards
const params = new URLSearchParams(window.location.search);
const start = params.get('start') || 1; // Default to 1 if no start param
const end = params.get('end') || 10;   // Default to 10 if no end param

const cardBox = loadCardsFromPool(start, end);

console.log(cardBox);

// Set the current card to the first card in the box
let currentCard = cardBox.cards[0];

// Select the question and the 4 answer text fields
const question = document.querySelector('#question');
const answerAtext = document.querySelector('#answerA');
const answerBtext = document.querySelector('#answerB');
const answerCtext = document.querySelector('#answerC');
const answerDtext = document.querySelector('#answerD');

// Eventlistener for click on Next Card
// TODO: Disable buttons on first/ last card
document.querySelector('#next-question').addEventListener('click', () => {
  currentCard = cardBox.getNextCard() || currentCard;
  loadCard();
});

// Eventlistener for click on Previous Card
document.querySelector('#prev-question').addEventListener('click', () => {
  currentCard = cardBox.getPreviousCard() || currentCard;
  loadCard();
});

// Set the HTML of the question and the answers to the values of the current card
const loadCard = () => {
  question.innerHTML = currentCard.question;
  answerAtext.innerHTML = currentCard.answers[0].text;
  answerBtext.innerHTML = currentCard.answers[1].text;
  answerCtext.innerHTML = currentCard.answers[2].text;
  answerDtext.innerHTML = currentCard.answers[3].text;
}

// Load the first card into DOM (will happen onload by including main.js)
loadCard();
