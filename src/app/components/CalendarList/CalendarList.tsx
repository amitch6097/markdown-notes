import React, { useEffect } from 'react';
import { Calendar } from '../../components/Calendar/Calendar';
import { ICalendarMonth } from '../../typings/types';
import './CalendarList.less';


export interface ICalendarListProps {
    months: ICalendarMonth[];
    selectedMonth: ICalendarMonth;
}

function getCalendarMonthId(month: ICalendarMonth) {
    return `mn-calendar-list-item__${month.year}-${month.month}`;
}

export function scrollToMonth(month: ICalendarMonth) {
    const element = document.getElementById(getCalendarMonthId(month));
    element.scrollIntoView();
}

export function CalendarList(props: ICalendarListProps) {

    useEffect(() => {
        scrollToMonth(props.selectedMonth);
    }, [props.selectedMonth])

    return (
        <ol className="mn-calendar-list">
            {props.months.map((month) => {
                return (
                    <li id={getCalendarMonthId(month)} className="mn-calendar-list__item">
                        <Calendar month={month} />
                    </li>
                );
            })}
        </ol>
    );
}
