import React from 'react';
import './CalendarListInfiniteScroll.less';
import {
    getTwelveMonthsPrevious,
    getTwelveMonthsNext,
    getCalendarMonth,
} from '../../lib/helpers';
import { ICalendarMonth } from '../../typings/types';
import { CalendarSkeleton } from '../Calendar/CalendarSkeleton';
import { CalendarList, scrollToMonth } from './CalendarList';

export interface ICalendarListInfiniteScrollProps {
    notes: Record<string, any>;
    onClickDay: (datetime: number) => void;
    selectedDatetime?: number;
}

export interface ICalendarListInfiniteScrollState {
    months: ICalendarMonth[];
}

export class CalendarListInfiniteScroll extends React.Component<
    ICalendarListInfiniteScrollProps,
    ICalendarListInfiniteScrollState
> {
    private ref: React.RefObject<HTMLDivElement> = React.createRef();
    private observer: IntersectionObserver;

    constructor(props: ICalendarListInfiniteScrollProps) {
        super(props);
        this.observer = new IntersectionObserver(this.onIntersection, {
            rootMargin: '0px',
            threshold: 0,
        });

        const months = [
            ...getTwelveMonthsNext(Number(this.props.selectedDatetime)),
            ...getTwelveMonthsPrevious(Number(this.props.selectedDatetime)),
        ];
        this.state = {
            months,
        };
    }

    componentDidMount() {
        if (this.ref?.current) {
            this.observer.observe(this.ref.current);
        }
    }

    onIntersection = ([entry], self) => {
        if (entry?.isIntersecting) {
            this.onLoadPrevious();
        }
    };

    onLoadPrevious = () => {
        const lastMonth = this.state.months[this.state.months.length - 1];
        const lastMonthDate = new Date(lastMonth.year, lastMonth.month);
        const oneMonthBeforeLastMonthDate = new Date(
            lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
        );
        const nextTwelveMonths = getTwelveMonthsPrevious(
            Number(oneMonthBeforeLastMonthDate)
        );
        const nextMonths = [...this.state.months, ...nextTwelveMonths];
        this.setState({
            months: nextMonths,
        });
    };

    render() {
        return (
            <div className="mn-calendar-list-infinite-scroll">
                <CalendarList
                    onClickDay={this.props.onClickDay}
                    notes={this.props.notes}
                    months={this.state.months}
                    selectedDatetime={this.props.selectedDatetime}
                />
                <div ref={this.ref}>
                    <ul className="mn-calendar-list-infinite-scroll__skeleton-list">
                        <li>
                            <CalendarSkeleton />
                        </li>
                        <li>
                            <CalendarSkeleton />
                        </li>
                        <li>
                            <CalendarSkeleton />
                        </li>
                        <li>
                            <CalendarSkeleton />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
