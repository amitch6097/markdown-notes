import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Calendar } from '../app/components/Calendar/Calendar';

export default {
    title: 'Components/Calendar',
    component: Calendar,
} as Meta;

export const Primary = () => {
    return (
        <Calendar
            month={{
                year: 2021,
                month: 0,
                days: 31,
                offset: 5,
            }}
        />
    );
};

export const With400WidthContainer = () => {
    return (
        <div style={{ width: '400px', border: '1px solid rgb(150, 150, 150)' }}>
            <Calendar
                month={{
                    year: 2021,
                    month: 0,
                    days: 31,
                    offset: 5,
                }}
            />
        </div>
    );
};
