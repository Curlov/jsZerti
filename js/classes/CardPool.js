export class CardPool {
    #cards;
    constructor() {
    }

    loadCard(card) {
        this.#cards = card;
    }
}