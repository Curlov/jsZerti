export class Answer {
    #id;
    #text;
    #correct;
    #cardId;

    constructor(id, text, correct, cardId) {
        this.#id = id;
        this.#text = text;
        this.#correct = correct;
        this.#cardId = cardId;
        this._cardId = cardId;
        this._text = text;
        this._id = id;
        this._correct = correct;
    }

    get cardId() {
        return this._cardId;
    }

    get text() {
        return this._text;
    }

    get id() {
        return this._id;
    }

    get correct() {
        return this._correct;
    }
}