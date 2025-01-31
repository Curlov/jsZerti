export class CardBox {
    #id;
    #cards = [];
    #currentIndex = 0;

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

    // checkAnswer() {
    //     const currentCard = this.#cards[this.#currentIndex];
    //     const checkboxes = document.querySelectorAll('.checkmark');
    //     const correctAnswer = currentCard.answers.find(answer => answer.correct).text;
    //     console.log(`Correct Answer: ${correctAnswer}`);
    //
    //     checkboxes.forEach(checkbox => {
    //         const label = document.querySelector(`label[for="${checkbox.id}"]`);
    //         const answerText = label.textContent;
    //         console.log(`Answer: ${answerText}`);
    //
    //         if (answerText === correctAnswer) {
    //             label.style.color = 'green';
    //             console.log("Correct!");
    //         } else {
    //             label.style.color = 'red';
    //             console.log("Wrong!");
    //         }
    //     });
    // }

    resetStyles() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.style.color = '';
        });
    }
    collectAnswers() {
        const cardId = this.#cards[this.#currentIndex].id;
        const checkboxes = document.querySelectorAll('.checkmark');
        const answers = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                answers.push(checkbox.id);
            }

        });
        return answers;
    }
    checkAnswer() {
        this.collectAnswer();
        const currentCard = this.#cards[this.#currentIndex];
        const checkboxes = document.querySelectorAll('.checkmark');
        const correctAnswer = currentCard.answers.find(answer => answer.correct).text;
        console.log(`Correct Answer: ${correctAnswer}`);

        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            const answerText = label.textContent;
            console.log(`Answer: ${answerText}`);
            console.log(checkbox.id);


            if (answerText === correctAnswer) {

                label.style.color = 'green';
                console.log("Correct!");
            } else {
                label.style.color = 'red';
                console.log("Wrong!");
            }
        });
    }
    collectAnswer() {
        const cardId = this.#cards[this.#currentIndex].id;
        const collectAnswer = [];
        const answerIds = [];
        const checkboxes = document.querySelectorAll('.checkmark');
        console.log(checkboxes);
        checkboxes.forEach(checkbox => {
            console.log(checkboxes);
            if (checkbox.checked) {
            answerIds.push(checkbox.id);
            console.log(answerIds);}
        })
        collectAnswer.push({cardId: cardId, answerIds: answerIds});
        console.log(collectAnswer);

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