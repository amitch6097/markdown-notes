// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from '../app/components/Button/Button';


export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

export const Primary = () => {
    return <Button type="primary">Primary</Button>;
};

export const Secondary = () => {
    return <Button type="secondary">Secondary</Button>;
};
