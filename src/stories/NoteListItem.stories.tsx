// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import {
    NoteListItem,
    INoteListItemProps,
} from '../app/components/NoteList/NoteListItem';

export default {
    title: 'Components/NoteListItem',
    component: NoteListItem,
} as Meta;

export const Primary = () => {
    return (
        <NoteListItem
            note={{
                id: '1',
                title: 'My First Note',
                body:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdAt: 1610331722661,
                updatedAt: 1610331722661,
            }}
        />
    );
};
