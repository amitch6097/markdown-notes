import React from 'react';
import './MarkdownPreview.less';

import { MarkdownPreview as ReactMarkdownPreview } from 'react-marked-markdown';

interface IMarkdownPreviewProps {
    value: string;
}

export function MarkdownPreview(props: IMarkdownPreviewProps) {
    return (
        <div className="mn-markdown-preview">
            <ReactMarkdownPreview
                value={props.value}
                markedOptions={{}}
                className="mn-note-creator__markdown-preview"
            />
        </div>
    );
}
