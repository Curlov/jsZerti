export class CardBox {
    #id;
    #cards = [];
    #currentIndex = 0;
    #collectAnswers = [];

    constructor(id) {
        this.#id = id;
    }

    getNextCard() {
        this.resetStyles();
        if (this.#currentIndex < this.#cards.length) {
            return this.#cards[++this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }

    getPreviousCard() {
        this.resetStyles();
        if (this.#currentIndex > 0) {
            return this.#cards[--this.#currentIndex];
        } else {
            return this.#cards[this.#currentIndex];
        }
    }



    checkAnswer() {
        const currentCard = this.#cards[this.#currentIndex];
        const checkboxes = document.querySelectorAll('.checkmark');
        const correctAnswer = currentCard.answers.find(answer => answer.correct).text;
        console.log(`Correct Answer: ${correctAnswer}`);

        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            const answerText = label.textContent;
            console.log(`Answer: ${answerText}`);

            if (answerText === correctAnswer) {
                label.style.color = 'green';
                console.log("Correct!");
            } else {
                label.style.color = 'red';
                console.log("Wrong!");
            }
        });
    }

    checkedAnswers() {
        const currentCard = this.#cards[this.#currentIndex];

        const checkboxes = document.querySelectorAll('.checkmark');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        const savedAnswer = this.#collectAnswers.find(
            collectAnswer => collectAnswer.cardId === currentCard.id
        );
        if (savedAnswer) {
            savedAnswer.answerIds.forEach(answerId => {
                const checkbox = document.querySelector(`#${answerId}`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    }



    resetStyles() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.style.color = '';
        });
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