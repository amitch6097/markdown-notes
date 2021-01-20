import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CalendarList } from '../app/components/CalendarList/CalendarList';
import { CalendarListInfiniteScroll } from '../app/components/CalendarList/CalendarListInfiniteScroll';
import { getCurrentDay } from '../app/lib/helpers';

export default {
    title: 'Components/Calendar List',
    component: CalendarList,
} as Meta;

export const Primary = () => {
    return (
        <div style={{ width: '400px' }}>
            <CalendarList
                notes={[]}
                onClickDay={console.log}
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

export const InfiniteScroll = () => {
    return (
        <div style={{ width: '400px' }}>
            <CalendarListInfiniteScroll
                onClickDay={console.log}
                notes={[
                    {
                        date: 1610331722661,
                        notes: [
                            {
                                id: '1',
                                title: 'My First Note',
                                body:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                createdAt: 1610331722661,
                                updatedAt: 1610331722661,
                            },
                            {
                                id: '1',
                                title: 'My Second Note',
                                body:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                createdAt: 1610331722661,
                                updatedAt: 1610331722661,
                            },
                            {
                                id: '1',
                                title: 'My Next Note',
                                body:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                createdAt: 1610331722661,
                                updatedAt: 1610331722661,
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};
