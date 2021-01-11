export function getCurrentDay(): Date {
    return new Date(new Date().setHours(0, 0, 0, 0));
}

/**
 * @param date the date to be formatted
 * Returns a string date MONTH/DAY/YEAR => ex. 1/21/20201
 */
export function formateDate(date: Date): string {
    return date.toLocaleDateString();
}

export function getDayOfTheWeek(year, month, day) {
    return new Date(year, month, day).getDay();
}

export function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export function getTwelveMonths(start: number) {
    const current = new Date(start);
    const months = [];
    for (let i = 0; i < 12; i++) {
        const currentCopy = new Date(current);
        currentCopy.setMonth(i * -1);
        const month = currentCopy.getMonth();
        const year = currentCopy.getFullYear();
        const days = daysInMonth(year, month);
        months.push({
            year,
            month,
            days,
        });
    }
    return months;
}

export function generateGUID() {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
    );
}

