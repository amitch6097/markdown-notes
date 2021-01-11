// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { NoteList, INoteListProps } from '../app/components/NoteList/NoteList';

export default {
    title: 'Components/NoteList',
    component: NoteList,
} as Meta;

export const Primary = () => {
    return (
        <NoteList
            label="Global Notes"
            notes={[
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
            ]}
        />
    );
};
