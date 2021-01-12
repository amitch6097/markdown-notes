import React from 'react';
import './MarkdownInput.less';

import { MarkdownInput as ReactMarkdownInput } from 'react-marked-markdown';

interface IMarkdownPreviewProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export function MarkdownInput(props: IMarkdownPreviewProps) {
    return (
        <div className="mn-markdown-input-wrapper">
            <ReactMarkdownInput
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value}
                className="mn-markdown-input"
            />
        </div>
    );
}
