
import { answers} from "../data/answers.js";
import { sections} from "../data/sections.js";


export class Card {
    #id;
    #question;
    #sectionId;
    #answers;

    constructor(id, question, sectionId) {
        this.#id = id;
        this.#question = question;
        this.#sectionId = sectionId;
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

    get sectionId() {
        return this.#sectionId;
    }
}
