import { CardPool } from "./classes/CardPool.js";
import { CardBox } from './classes/CardBox.js';
import { cards } from './data/cards.js';
import {Section} from "./classes/Section.js"
import {sections} from "./data/sections.js";

const loadCardsFromPool = (start, end, selectedSections) => {
  // Sanitize user input to avoid invalid data
  start = Math.max(1, start); // Ensure start is at least 1
  end = Math.min(cards.length, end); // Ensure end is at most cards.length

  // Filter cards based on selected sections
  let filteredCards = cards;
  if (selectedSections.length > 0) {
    filteredCards = cards.filter(card => selectedSections.includes(card.sectionId));
  }

  // Create CardPool and load each card from data.js
  const cardPool = new CardPool();
  filteredCards.forEach(card => cardPool.loadCard(card));

  // Create CardBox object and load selected cards from the pool
  const cardBox = new CardBox(1);
  // start - 1 as the array starts with index 0
  cardBox.loadCards(cardPool.cards.slice(start - 1, end));

  return cardBox;
}

// Show the current Card into the DOM
const showCard = (currentCard) => {
  document.querySelector('#number').innerHTML = '#' + cardBox.cards[currentCard].id || '#';
  document.querySelector('#question').innerHTML = cardBox.cards[currentCard].question || 'Keine Frage gefunden';
  document.querySelector('#answerA').innerHTML = cardBox.cards[currentCard].answers[0].text || 'Keine Antwort gefunden';
  document.querySelector('#answerB').innerHTML = cardBox.cards[currentCard].answers[1].text || 'Keine Antwort gefunden';
  document.querySelector('#answerC').innerHTML = cardBox.cards[currentCard].answers[2].text || 'Keine Antwort gefunden';
  document.querySelector('#answerD').innerHTML = cardBox.cards[currentCard].answers[3].text || 'Keine Antwort gefunden';

  cardBox.checkedAnswers();
}

document.querySelector('#forward-btn').addEventListener('click', () => {
  cardBox.collectAnswer()
  cardBox.getNextCard();
  showCard(cardBox.currentIndex);
});

document.querySelector('#back-btn').addEventListener('click', () => {
  cardBox.collectAnswer()
  cardBox.getPreviousCard();
  showCard(cardBox.currentIndex);
});

document.querySelector('#check-btn').addEventListener('click', () => {
  cardBox.checkAnswer();
});

// If start and end positions are given in the GET params from index.html, use them 
// to choose cards from the pool. Otherwise, default to the first 10 cards
const params = new URLSearchParams(window.location.search);
const start = params.get('start') || 1; // Default to 1 if no start param
const end = params.get('end') || 10;   // Default to 10 if no end param
const selectedSections = params.get('sections') ? params.get('sections').split(',').map(Number) : [];
const cardBox = loadCardsFromPool(start, end, selectedSections);


// funktion um gegebene antworten im local storage zu speichern
// inkl. datum- u. zeitangabe und aller zugehöriger cards
document.querySelector('#save-btn').addEventListener('click', () => {
  // zuerst aktuelle antworten aus collectAnswer() sammeln und speichern sobald save gedrückt wird
  cardBox.collectAnswer();

  const sessionData = {
    date: new Date().toISOString(),
    collectAnswers: cardBox.collectedAnswers,
    cards: cardBox.cards
  }
  localStorage.setItem('sessionData', JSON.stringify(sessionData));
});

// funktion um bereits gegebene antworten aus dem local storage zu laden
// und collectAnswers werden in cardbox gesetzt
const loadSession = function() {
  const sessionData = JSON.parse(localStorage.getItem('sessionData'));

  if (sessionData && sessionData.collectAnswers) {
    cardBox.setCollectedAnswers(sessionData.collectAnswers);
  }
}

loadSession();

showCard(cardBox.currentIndex);

