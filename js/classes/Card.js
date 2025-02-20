import { answers} from "../data/answers.js";

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
        this.shuffleAnswers();
    }

    // Fisher-Yates-Shuffle on #answers
    shuffleAnswers() {
        for (let i = this.#answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#answers[i], this.#answers[j]] = [this.#answers[j], this.#answers[i]];
        }
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
