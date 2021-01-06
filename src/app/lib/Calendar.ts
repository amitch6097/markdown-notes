export class Calendar {
    constructor() {

    }
}

export class Month {
    private date;

    constructor(year, month) {
        this.date = new Date(year, month, 0);
    }

    get days() {
        return this.date.getDate();
    }
}