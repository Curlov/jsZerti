
export class Card {
    #id;
    #question;
    #cardBoxId;
    #answers;

    constructor(id, question, cardBoxId) {
        this.#id = id;
        this.#question = question;
        this.#cardBoxId = cardBoxId;
        this.#answers =  answers.filter(answer => answer.cardId === id);
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
