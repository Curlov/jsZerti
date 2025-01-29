export class CardBox {
    #id;
    #cards;

    constructor(id) {
        this.#id = id;
        this._id = id;
    }

    loadCards(card) {
        this.#cards = card;
    }

    get cards() {
        return this.#cards;
    }


    get id() {
        return this._id;
    }
}