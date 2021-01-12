import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CalendarList } from '../app/components/CalendarList/CalendarList';

export default {
    title: 'Components/Calendar List',
    component: CalendarList,
} as Meta;

export const Primary = () => {
    return (
        <div style={{ width: '400px' }}>
            <CalendarList
                months={[
                    {
                        year: 2021,
                        month: 0,
                        days: 31,
                        offset: 5,
                    },
                    {
                        year: 2020,
                        month: 11,
                        days: 31,
                        offset: 2,
                    },
                    {
                        year: 2020,
                        month: 10,
                        days: 30,
                        offset: 3,
                    },
                    {
                        year: 2020,
                        month: 9,
                        days: 31,
                        offset: 5,
                    },
                ]}
            />
        </div>
    );
};
