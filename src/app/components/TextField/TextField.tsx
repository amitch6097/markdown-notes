import React from 'react';
import './TextField.less';

export interface ITextFieldProps {
    onChange: (value: string) => void;
    value?: string;
    placeholder?: string;
}

export function TextField(props: ITextFieldProps) {
    return (
        <input
            className="mn-text-field"
            type="text"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
        />
    );
}
