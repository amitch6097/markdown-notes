// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { MarkdownPreview } from '../app/components/MarkdownPreview/MarkdownPreview';

export default {
    title: 'Components/Markdown Preview',
    component: MarkdownPreview,
} as Meta;

export const Primary = () => {
    return (
        <MarkdownPreview
            value={`# My Preview
            Yes this is my preview`}
        />
    );
};
