import {answers} from "../data/answers.js";

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

    get question() {
        return this.#question;
    }
}
