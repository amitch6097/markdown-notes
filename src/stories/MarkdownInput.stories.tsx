// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { MarkdownInput } from '../app/components/MarkdownInput/MarkdownInput';


export default {
    title: 'Components/Markdown Input',
    component: MarkdownInput,
} as Meta;

export const Primary = () => {
    return <MarkdownInput placeholder="My Placeholder" onChange={console.log} />;
};
