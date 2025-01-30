export class CardBox {
    #id;
    #cards = [];
    #currentIndex = 0;

    constructor(id) {
        this.#id = id;

    }
    getNextCard() {
        if (this.#currentIndex < this.#cards.length - 1) {
            return this.#cards[++this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }

    getPreviousCard() {
        if (this.#currentIndex > 0) {
            return this.#cards[--this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }

    checkAnswer(userAnswer) {
        const currentCard = this.#cards[this.#currentIndex];
        /*        const correctAnswers = currentCard.answers.filter(answer => answer.correct).map(answer => answer.text);*/
        /*        console.log(correctAnswer);
                console.log(correctAnswers);*/
        return currentCard.answers.filter(answer => answer.correct);
        // return currentCard.answers.find(answer => answer.correct).text;
    }


    get cards() {
        return this.#cards;
    }
    loadCards(cards) {
        this.#cards = cards;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

}


