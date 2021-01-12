// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Toggle } from '../app/components/Toggle/Toggle';

export default {
    title: 'Components/Toggle',
    component: Toggle,
} as Meta;

export const ToggleOn = () => {
    return (
        <Toggle id="1" value={true} onChange={console.log} label="My Label" />
    );
};

export const ToggleOff = () => {
    return (
        <Toggle id="1" value={false} onChange={console.log} label="My Label" />
    );
};
