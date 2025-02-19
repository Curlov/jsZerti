export class Section {
    #id;
    #title;
    #description;

    constructor(id, title, description) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }
}
