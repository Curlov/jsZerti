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
        // Wählt alle Checkboxen mit der Klasse 'checkmark' aus
        const checkboxes = Array.from(document.querySelectorAll('.checkmark'));

        // Falls noch keine Antworten für diese Karte gespeichert sind, initialisiere ein leeres Array
        const selectedAnswers = this.#collectAnswers.get(card.id) || [];

        checkboxes.forEach(checkbox => {
            const answerText = checkbox.closest("tr").querySelector("td:nth-child(2) label").textContent;
            if (checkbox.checked) {
                const answer = card.answers.find(answer => answer.text === answerText);
                if (answer && !selectedAnswers.includes(answer)) {
                    selectedAnswers.push(answer);
                }
            }
        });

        // Aktualisiere die Map mit der neuen Antwortliste
        this.#collectAnswers.set(card.id, selectedAnswers);
    }

    // Die Methode checkedAnswers überprüft, welche Antworten der Benutzer für die aktuelle Karte gespeichert hat.
    checkedAnswers() {
        const currentCard = this.#cards[this.#currentIndex];

        // Alle Kontrollkästchen mit der Klasse 'checkmark' auswählen
        const checkboxes = document.querySelectorAll('.checkmark');

        // Alle Kontrollkästchen auf "nicht geprüft" setzen
        checkboxes.forEach(checkbox => checkbox.checked = false);

        // Gespeicherte Antworten für die aktuelle Karte finden
        const savedAnswer = this.#collectAnswers.get(currentCard.id);

        // Wenn gespeicherte Antworten existieren
        if (savedAnswer) {
            const givenAnswersText = savedAnswer.map(answer => answer.text);

            checkboxes.forEach(checkbox => {
                const answerText = checkbox.closest("tr").querySelector("td:nth-child(2) label").textContent;
                if (givenAnswersText.includes(answerText)) {
                    checkbox.checked = true;
                }
            })
        }
    }

    // FIX: Nach Änderung von this.#collectAnswers funktioniert getProzentCorrectAnswers nicht mehr
    getProzentCorrectAnswers() {
        let correctCount = 0;
        let cardCount = 0;

        this.#collectAnswers.forEach(collected => {
            // Finden der Karte anhand der cardId, wenn die Karte nicht gefunden wird oder keine Antworten existieren, überspringen
            const card = this.#cards.find(c => c.id === collected.cardId);
            if (!card || collected.answerIds.length === 0) {
                // Entfernt Karten ohne Antworten oder nicht existierende Karten
                return;
            }
            // Verknüpfen von checkbox.id mit dem Index (A → 0, B → 1, C → 2, D → 3)
            const checkboxMap = { checkboxA: 0, checkboxB: 1, checkboxC: 2, checkboxD: 3 };
            const answers = card.answers || []; // Alle möglichen Antworten für diese Karte holen

            // Überprüfen, ob die ausgewählten Antworten korrekt sind
            const userCorrect = collected.answerIds.map(checkboxId => {
                const answerIndex = checkboxMap[checkboxId];
                return answers[answerIndex]?.correct || false; // если индекс выходит за пределы, возвращаем false
            });
            // Zählen der richtigen Antworten für die Karte
            const correctAnswersForCard = userCorrect.filter(isCorrect => isCorrect === true).length;

            if (correctAnswersForCard > 0) {
                correctCount += correctAnswersForCard; // Добавляем правильные ответы
            }
            // Nur Karten berücksichtigen, für die Antworten abgegeben wurden
            cardCount += 1;
        });

        const percentage = cardCount === 0 ? 0 : (correctCount / cardCount) * 100;
        // Bestanden/Nicht Bestanden Logik
        const resultMessage = percentage >= 70
            ? `<span style="color: green; font-weight: bold;">Bestanden</span>`
            : `<span style="color: red; font-weight: bold;">Nicht Bestanden</span>`;
        // Ergebnisstring mit den Prozentsätzen zurückgeben
        return `${cardCount} Fragen wurden beantwortet.<br>` +
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
