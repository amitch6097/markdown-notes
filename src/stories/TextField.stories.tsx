import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { TextField } from '../app/components/TextField/TextField';

export default {
    title: 'Components/Text Field',
    component: TextField,
} as Meta;

export const Primary = () => {
    return <TextField onChange={console.log} value={'My Value'} />;
};

export const WithPlaceholder = () => {
    return <TextField onChange={console.log} placeholder={'My Placeholder'} />;
};
