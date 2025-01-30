export class CardBox {
    #id;
    #cards = [];
    #currentIndex = 1;

    constructor(id) {
        this.#id = id;

    }
    getNextCard() {
        if (this.#currentIndex < this.#cards.length) {
            return this.#cards[++this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }

    getPreviousCard() {
        if (this.#currentIndex > 1) {
            return this.#cards[--this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }

    checkAnswer(userAnswer) {
        const currentCard = this.#cards[this.#currentIndex];
        console.log(currentCard);
        const correctAnswer = currentCard.answers.find(answer => answer.correct).text;
        console.log(correctAnswer);
        return userAnswer === correctAnswer;
    }

    getCurrentIndex() {
        return this.#currentIndex;
    }

    setCurrentIndex(index) {
        this.#currentIndex = index;
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


