import React from 'react';
import './CalendarSkeleton.less';

export function CalendarSkeleton() {
    return (
        <div className="mn-calendar-skeleton">
            <div className="mn-calendar-skeleton__title" />
            <div className="mn-calendar-skeleton__content" />
        </div>
    );
}
