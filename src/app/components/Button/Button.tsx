import React from 'react';
import './Button.less';

export interface IButtonProps {
    children: any;
    type: 'primary' | 'secondary';
    onClick?: () => void;
}

export function Button(props: IButtonProps) {
    return (
        <button onClick={props.onClick} className={`mn-button mn-button--${props.type}`}>
            {props.children}
        </button>
    );
}
