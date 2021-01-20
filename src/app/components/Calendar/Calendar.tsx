import React from 'react';
import { getDayOfTheWeek } from '../../lib/helpers';
import { ICalendarMonth } from '../../typings/types';
import './Calendar.less';

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export interface ICalendarProps {
    month: ICalendarMonth;
    selectedDatetime?: number;
    notes?: Record<string, any>;
    onClickDay: (datetime: number) => void;
}

export function Calendar(props: ICalendarProps) {
    return (
        <div className="mn-calendar">
            <div className="mn-calendar__title">
                <h4>{monthNames[props.month.month]}</h4>
                <h4>{props.month.year}</h4>
            </div>
            <div className="mn-calendar__day-of-week">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                    (dayOfTheWeek) => {
                        return (
                            <div
                                key={dayOfTheWeek}
                                className="mn-calendar__day-of-week-title"
                            >
                                {dayOfTheWeek}
                            </div>
                        );
                    }
                )}
            </div>
            <div className="mn-calendar__date-grid">
                {new Array(props.month.days).fill(null).map((__, index) => {
                    const datetime = Number(
                        new Date(props.month.year, props.month.month, index + 1)
                    );
                    const offset = index === 0 ? props.month.offset : undefined;
                    const selected = props.selectedDatetime === datetime;
                    const hasNote = Boolean(props.notes[datetime]);
                    return (
                        <div
                            style={offset ? { gridColumn: offset } : {}}
                            className={`mn-calendar__date-grid-day ${
                                selected
                                    ? 'mn-calendar__date-grid-day--selected'
                                    : ''
                            }`}
                            key={datetime}
                        >
                            <Day
                                onClick={props.onClickDay}
                                hasNote={hasNote}
                                index={index}
                                datetime={datetime}
                                offset={offset}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export interface IDayProps {
    index: number;
    datetime: number;
    hasNotes?: boolean;
    offset?: number;
    hasNote: boolean;
    onClick: (dateTime: number) => void
}

export function Day(props: IDayProps) {
    const day = props.index + 1;

    return (
        <button
            onClick={() => props.onClick(props.datetime)}
            className={`mn-calendar-day ${
                props.hasNote ? 'mn-calendar-day--has-note' : ''
            }`}
        >
            <time dateTime={String(props.datetime)}>{day}</time>
        </button>
    );
}
