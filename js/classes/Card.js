export class Card {
    #id;
    #question;
    #cardBoxId;
    #answers;

    constructor(id, question, cardBoxId, answers) {
        this.#id = id;
        this.#question = question;
        this.#cardBoxId = cardBoxId;
        this.#answers =  answers;
    }

    get answers() {
        return this.#answers;
    }

    get id() {
        return this.#id;
    }

    get question() {
        return this.#question;
    }

    get cardBoxId() {
        return this.#cardBoxId;
    }
}
