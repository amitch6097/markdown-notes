import React, { useEffect, useMemo } from 'react';
import { Calendar } from '../../components/Calendar/Calendar';
import { getCalendarMonth } from '../../lib/helpers';
import { ICalendarMonth } from '../../typings/types';
import './CalendarList.less';

export interface ICalendarListProps {
    months: ICalendarMonth[];
    selectedDatetime?: number;
    notes: Record<string, any>;
    onClickDay: (datetime: number) => void;
}

function getCalendarMonthId(month: ICalendarMonth) {
    return `mn-calendar-list-item__${month.year}-${month.month}`;
}

export function scrollToMonth(month: ICalendarMonth) {
    const element = document.getElementById(getCalendarMonthId(month));
    element.scrollIntoView();
}

export function CalendarList(props: ICalendarListProps) {

    /**
     * NOTE we don't want to do this because it just constantly scrolls
     * the calendar, but maybe there is another use?
     */
    const calendarMonth = useMemo(() => {
        return getCalendarMonth(new Date(props.selectedDatetime));
    }, [props.selectedDatetime])

    useEffect(() => {
        scrollToMonth(calendarMonth);
    }, []);

    return (
        <ol className="mn-calendar-list">
            {props.months.map((month) => {
                return (
                    <li
                        id={getCalendarMonthId(month)}
                        className="mn-calendar-list__item"
                    >
                        <Calendar
                            selectedDatetime={props.selectedDatetime}
                            onClickDay={props.onClickDay}
                            notes={props.notes}
                            month={month}
                        />
                    </li>
                );
            })}
        </ol>
    );
}
