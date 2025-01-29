import { Card } from './Card.js';

export class CardPool {
  /** @type {Array<Card>} */
  #cards = [];

  /**
   * Loads a card.
   * @param {Card} card
   * @returns {void}
   */
  loadCard(card) {
    this.#cards.push(card);
  }

  /**
   * Gets the cards array. 
   * @returns {Array<Card>}
   */
  get cards() {
    return this.#cards;
  }
}
