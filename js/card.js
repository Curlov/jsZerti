import { CardPool } from "./classes/CardPool.js";
import { CardBox } from './classes/CardBox.js';
import { cards } from './data/cards.js';
import { sections } from "./data/sections.js";

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

  cardBox.shuffleCards();

  return cardBox;
}

const getSectionTitle = function(sectionId) {
  const section = sections.find(s => s.id === sectionId);
  return section ? section.title : '';
}

// Show the current Card into the DOM
const showCard = (currentCard) => {
  document.querySelector('#number').innerHTML = '#' + (cardBox.cards[currentCard].id || '#');
  document.querySelector('#section').innerHTML = getSectionTitle(cardBox.cards[currentCard].sectionId || '');
  document.querySelector('#question').innerHTML = cardBox.cards[currentCard].question || 'Keine Frage gefunden';
  document.querySelector('#answerA').innerHTML = cardBox.cards[currentCard].answers[0].text || 'Keine Antwort gefunden';
  document.querySelector('#answerB').innerHTML = cardBox.cards[currentCard].answers[1].text || 'Keine Antwort gefunden';
  document.querySelector('#answerC').innerHTML = cardBox.cards[currentCard].answers[2].text || 'Keine Antwort gefunden';
  document.querySelector('#answerD').innerHTML = cardBox.cards[currentCard].answers[3].text || 'Keine Antwort gefunden';

  cardBox.checkedAnswers();
};

// funktion um bereits gegebene antworten aus dem local storage zu laden
// und collectAnswers werden in cardbox gesetzt
const loadSession = function() {
  const sessionData = JSON.parse(localStorage.getItem('sessionData'));

  if (sessionData && sessionData.collectAnswers) {
    cardBox.setCollectedAnswers(sessionData.collectAnswers);
  }
}

// If start and end positions are given in the GET params from index.html, use them 
// to choose cards from the pool. Otherwise, default to the first 10 cards
const params = new URLSearchParams(window.location.search);
const start = params.get('start') || 1; // Default to 1 if no start param
const end = params.get('end') || cards.length;   // Default to all cards if no end param
const selectedSections = params.get('sections') ? params.get('sections').split(',').map(Number) : [];
const cardBox = loadCardsFromPool(start, end, selectedSections);

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

// funktion um gegebene antworten im local storage zu speichern
// inkl. datum- u. zeitangabe und aller zugehöriger cards
document.querySelector('#save-btn').addEventListener('click', () => {
  // zuerst aktuelle antworten aus collectAnswer() sammeln und speichern sobald save gedrückt wird
  cardBox.collectAnswer();

  const collectAnswers = [];
  cardBox.collectedAnswers.forEach((answers, cardId) => {
    collectAnswers.push([cardId, answers.map(answer => answer.toJSON())]);
  });

  const sessionData = {
    date: new Date().toISOString(),
    collectAnswers,
    // NOTE: Wird im Moment nicht genutzt und müsste, damit es funktioniert, per Hand serialisiert werden
    // cards: cardBox.cards
  }

  localStorage.setItem('sessionData', JSON.stringify(sessionData));
});

loadSession();

showCard(cardBox.currentIndex);
