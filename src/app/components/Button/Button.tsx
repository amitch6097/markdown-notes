import React from 'react';
import './Button.less';

export interface IButtonProps {
    children: any;
    type: 'primary' | 'secondary';
}

export function Button(props: IButtonProps) {
    return (
        <button className={`mn-button mn-button--${props.type}`}>
            {props.children}
        </button>
    );
}
