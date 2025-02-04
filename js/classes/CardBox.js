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
        if (this.#currentIndex < this.#cards.length -1) {
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

    resetStyles() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            label.style.color = '';
        });
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
        const answerIds = [];
        const checkboxes = document.querySelectorAll('.checkmark');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
            answerIds.push(checkbox.id);}
        })
        const cardIndex = this.#collectAnswers.findIndex(
            collectAnswer => collectAnswer.cardId === cardId
        );
        if (cardIndex !== -1) {
            this.#collectAnswers[cardIndex] = { cardId, answerIds };
        } else {
            this.#collectAnswers.push({cardId, answerIds});
        }
        console.log(this.#collectAnswers);

    }

    // Die Methode checkedAnswers überprüft, welche Antworten der Benutzer für die aktuelle Karte gespeichert hat.
    checkedAnswers() {
        const currentCard = this.#cards[this.#currentIndex];

        // Alle Kontrollkästchen mit der Klasse 'checkmark' auswählen
        const checkboxes = document.querySelectorAll('.checkmark');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Alle Kontrollkästchen auf "nicht geprüft" setzen
        });

        // Gespeicherte Antworten für die aktuelle Karte finden
        const savedAnswer = this.#collectAnswers.find(
            collectAnswer => collectAnswer.cardId === currentCard.id
        );
        // Wenn gespeicherte Antworten existieren
        if (savedAnswer) {
            savedAnswer.answerIds.forEach(answerId => { // Für jede gespeicherte Antwort
                const checkbox = document.querySelector(`#${answerId}`); // Das entsprechende Kontrollkästchen auswählen
                if (checkbox) {
                    checkbox.checked = true; // Kontrollkästchen auf "geprüft" setzen
                }
            });
        }
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

    get collectedAnswers() {
        return this.#collectAnswers;
    }

    setCollectedAnswers(savedAnswers) {
        this.#collectAnswers = savedAnswers;
    }
    
}