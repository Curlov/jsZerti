export class CardBox {
    #id;
    #cards = [];
    #currentIndex = 0;
    #collectAnswers = new Map();

    constructor(id) {
        this.#id = id;
    }

    getNextCard() {
        this.resetStyles();
        if (this.#currentIndex < this.#cards.length - 1) {
            return this.#cards[++this.#currentIndex];
        } else {
            const resultMessage = document.querySelector("#result-message");
            resultMessage.innerHTML = this.getProzentCorrectAnswers();
            return this.#cards[this.#currentIndex];
        }
    }

    getPreviousCard() {
        this.resetStyles();
        return this.#currentIndex > 0 ? this.#cards[--this.#currentIndex] : this.#cards[this.#currentIndex];
    }

    resetStyles() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => label.style.color = '');
    }

    checkAnswer() {
        this.collectAnswer();
        const currentCard = this.#cards[this.#currentIndex];
        const checkboxes = document.querySelectorAll('.checkmark');

        const correctAnswers = currentCard.answers.flatMap(answer => answer.correct ? [answer.text] : []);

        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            const answerText = label.textContent;

            correctAnswers.includes(answerText) ? label.style.color = 'green' : label.style.color = 'red';
        });
    }

    collectAnswer() {
        // Ruft die aktuelle Karte ab
        const card = this.#cards[this.#currentIndex];

        // Filtere nur die aktivierten Checkboxen
        const selectedAnswers = Array.from(document.querySelectorAll('.checkmark'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => {
                const answerText = checkbox.closest("tr").querySelector("td:nth-child(2) label").textContent;
                return card.answers.find(answer => answer.text === answerText);
            })

        // Aktualisiere die Map mit der neuen Antwortliste
        this.#collectAnswers.set(card.id, selectedAnswers);
    }

    // Die Methode checkedAnswers überprüft, welche Antworten der Benutzer für die aktuelle Karte gespeichert hat.
    checkedAnswers() {
        // Alle Kontrollkästchen mit der Klasse 'checkmark' auswählen
        const checkboxes = document.querySelectorAll('.checkmark');

        // Alle Kontrollkästchen auf "nicht geprüft" setzen
        checkboxes.forEach(checkbox => checkbox.checked = false);

        // Gespeicherte Antworten für die aktuelle Karte finden
        const savedAnswer = this.#collectAnswers.get(this.#cards[this.#currentIndex].id);

        // Wenn keine gespeicherte Antworten existieren stoppe hier
        if (!savedAnswer) return

        const givenAnswersText = savedAnswer.map(answer => answer.text);

        checkboxes.forEach(checkbox => {
            const answerText = checkbox.closest("tr").querySelector("td:nth-child(2) label").textContent;
            checkbox.checked = givenAnswersText.includes(answerText); // true oder false
        })
    }

    getProzentCorrectAnswers() {
        let correctCount = 0;
        let cardCount = 0;

        this.#collectAnswers.forEach((answers, cardId) => {
            // Finden der Karte anhand der cardId, wenn die Karte nicht gefunden wird oder keine Antworten existieren, überspringen
            const card = this.#cards.find(c => c.id === cardId);

            // Entfernt Karten ohne Antworten oder nicht existierende Karten
            if (!card || answers.length === 0) return;

            // Zähle die gesamtzahl der korrekten Antworten
            cardCount += card.answers.filter(answer => answer.correct).length;

            // Zähle die korrekt ausgewählten Antworten
            correctCount += answers.filter(answer => answer.correct).length;
        });

        const percentage = cardCount === 0 ? 0 : (correctCount / cardCount) * 100;
        // Bestanden/Nicht Bestanden Logik
        const resultMessage = percentage >= 70
            ? `<span style="color: green; font-weight: bold;">Bestanden</span>`
            : `<span style="color: red; font-weight: bold;">Nicht Bestanden</span>`;
        // Ergebnisstring mit den Prozentsätzen zurückgeben
        return `${cardCount} Antworten wurden gegeben.<br>` +
            `Davon waren ${correctCount} Antworten korrekt.<br>` +
            `Das sind ${percentage.toFixed(2)}% (${Math.round(percentage)}%) von den beantworteten Fragen.<br><br>` +
            resultMessage;
    }

    // Fisher-Yates-Shuffle on #cards
    shuffleCards() {
        for (let i = this.#cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
        }
    }

    get currentIndex() {
        return this.#currentIndex;
    }

    set currentIndex(index) {
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
        this.#collectAnswers = new Map(savedAnswers);
    }
}
