// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { AppBar } from '../app/components/AppBar/AppBar';

export default {
    title: 'Components/App Bar',
    component: AppBar,
} as Meta;

export const Primary = () => {
    return (
        <AppBar
            actions={[
                {
                    label: 'Create Note',
                    type: 'primary',
                },
            ]}
        />
    );
};

export const CreatingNote = () => {
    return (
        <AppBar
            actions={[
                {
                    label: 'Cancel',
                    type: 'secondary',
                },
                {
                    label: 'Save Note',
                    type: 'primary',
                },
            ]}
        />
    );
};

