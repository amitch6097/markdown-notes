import React from 'react';
import { Calendar } from '../../components/Calendar/Calendar';
import { ICalendarMonth } from '../../typings/types';
import './CalendarList.less';


export interface ICalendarListProps {
    months: ICalendarMonth[];
}

export function CalendarList(props: ICalendarListProps) {
    return (
        <ol className="mn-calendar-list">
            {props.months.map((month) => {
                return (
                    <li className="mn-calendar-list__item">
                        <Calendar month={month} />
                    </li>
                );
            })}
        </ol>
    );
}
