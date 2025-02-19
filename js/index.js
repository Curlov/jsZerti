import { cards } from "./data/cards.js";
import { sections } from "./data/sections.js";

// Function to include EventListener on keypress
const handleKeyPress = (event) => event.key === 'Enter' && submitCardRange();

// How many cards are in the pool? Display it to the user.
const totalNumberOfCards = cards.length;
document.querySelector('#totalNumberOfCards').innerHTML = totalNumberOfCards;

// EventListener on button to select a set of cards
document.querySelector('#submitCardRange').addEventListener('click', submitCardRange);

// EventListener on keypress to select startQuestion/endQuestion
document.querySelector('#startQuestion').addEventListener('keypress', handleKeyPress);
document.querySelector('#endQuestion').addEventListener('keypress', handleKeyPress);

// Function to read startQuestion/endQuestion
function submitCardRange() {
    const start = document.querySelector('#startQuestion').value;
    const end = document.querySelector('#endQuestion').value;

    // Fehlermeldung
    const errorMessage = document.querySelector('#error-message');
    errorMessage.classList.add('d-none');

    // Prüfen ob Start und End angegeben wurden und ob die Kartennummern gültig sind.
    if (!start || !end) {
        if (!start && !end) {
            errorMessage.textContent = "Bitte geben Sie sowohl eine Start- als auch eine Endkarte ein.";
        } else if (!end) {
            errorMessage.textContent = "Die Endkarte fehlt. Bitte geben Sie eine gültige Endkarte ein.";
        } else {
            errorMessage.textContent = "Die Startkarte fehlt. Bitte geben Sie eine gültige Startkarte ein.";
        }
        errorMessage.classList.remove('d-none');
        return;
    }
    // Prüfen ob Start und End korrekt sind.
    if (parseInt(start) > parseInt(end)) {
        errorMessage.textContent = "Die Startkarte darf nicht größer als die Endkarte sein.";
        errorMessage.classList.remove('d-none');
        return;
    }
    // Prüfen ob Start und End gültige Kartennummern sind.
    if (parseInt(start) < 1 || parseInt(start) > totalNumberOfCards || parseInt(end) < 1 || parseInt(end) > totalNumberOfCards) {
        errorMessage.textContent = `Die Kartennummer muss zwischen 1 und ${totalNumberOfCards} sein.`;
        errorMessage.classList.remove('d-none');
        return;
    }
    const selectedSections = Array.from(document.querySelectorAll('.checkbox-container input:checked')).map(checkbox => parseInt(checkbox.value));

    // Redirect to card.html with start and end as GET params
    window.location.href = `card.html?start=${start}&end=${end}&sections=${selectedSections.join(',')}`;
}

//Checkboxes
const containerEl = document.querySelector('.checkbox-container');
sections.forEach(section => {
    const sectionCards = cards.filter(element => {
        return element.sectionId === section.id;
    });

    const divEl = document.createElement("div");
    const labelEl = document.createElement("label");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = 'checkbox';
    checkboxEl.value = section.id;
    checkboxEl.style.marginRight = "10px";

    labelEl.appendChild(checkboxEl);
    labelEl.appendChild(document.createTextNode(`${section.title} (${sectionCards.length} cards)`));
    divEl.appendChild(labelEl);
    containerEl.appendChild(divEl);
});
