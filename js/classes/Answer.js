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

    // Methode um ein einfaches Objekt im localStorage zu speichern
    toJSON() {
        return { id: this.#id, text: this.#text, correct: this.#correct, cardId: this.#cardId };
    }

    // Methode um ein Objekt aus einem JSON-String zu erstellen
    static fromJSON(json) {
        return new Answer(json.id, json.text, json.correct, json.cardId);
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
