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
    }

    get cardId() {
        return this.#cardId;
    }

    get text() {
        return this.#text;
    }

    get id() {
        return this.#id;
    }

    get correct() {
        return this.#correct;
    }
}
