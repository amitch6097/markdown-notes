import React from 'react';
import './Button.less';

export interface IButtonProps {
    onChange: (value: string) => void;
    value?: string;
    placeholder: string;
}

export function TextField(props: IButtonProps) {
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
