import { ICalendarMonth } from "../typings/types";

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

export function getCalendarMonth(date: Date): ICalendarMonth {
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = daysInMonth(year, month);
    const offset = getDayOfTheWeek(year, month, 0);
    return {
        year,
        month,
        days,
        offset
    }
}

export function getTwelveMonthsNext(start: number): ICalendarMonth[] {
    const current = new Date(start);
    const inAYear = current.setFullYear(current.getFullYear() + 1);
    const months = [];
    for (let i = 0; i < 12; i++) {
        const inAYearCopy = new Date(inAYear);
        const currentMonth = inAYearCopy.getMonth();
        inAYearCopy.setMonth(currentMonth + (i * -1));
        months.push(getCalendarMonth(inAYearCopy));
    }
    return months;
}

export function getTwelveMonthsPrevious(start: number): ICalendarMonth[] {
    const current = new Date(start);
    const months = [];
    for (let i = 0; i < 12; i++) {
        const currentCopy = new Date(current);
        const currentMonth = currentCopy.getMonth();
        currentCopy.setMonth(currentMonth + (i * -1));
        months.push(getCalendarMonth(currentCopy));

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

