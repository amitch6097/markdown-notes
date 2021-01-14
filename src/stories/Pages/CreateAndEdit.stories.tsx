// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CreateAndEdit } from '../../app/pages/CreateAndEdit/CreateAndEdit';

export default {
    title: 'Pages/Create And Edit',
    component: CreateAndEdit,
} as Meta;

export const Primary = () => {
    return (
        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <CreateAndEdit onCancel={console.log} onSave={console.log} />
        </div>
    );
};
