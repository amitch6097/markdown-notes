import { Calendar } from '../../components/Calendar/Calendar';

import React from 'react';
import { getTwelveMonths } from '../../lib/helpers';
import { ICalendarMonth } from '../../typings/types';

export interface ICalendarListProps {
    months: ICalendarMonth[];
}

export function CalendarList(props: ICalendarListProps) {
    return (
        <div className="mn-calendar-list">
            {props.months.map((month) => {
                return <Calendar month={month} />;
            })}
        </div>
    );
}
