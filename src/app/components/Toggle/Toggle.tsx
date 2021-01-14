import React from 'react';
import './Toggle.less';

interface IToggleProps {
    id: string;
    value: boolean;
    onChange: (value: boolean) => void;
    label: string;
}

export function Toggle(props: IToggleProps) {
    return (
        <div className="mn-toggle">
            <div className="mn-toggle__container">
                <input
                    id={props.id}
                    type="checkbox"
                    onChange={() => props.onChange(!props.value)}
                    {...(props.value ? { checked: true } : {})}
                />
                <span
                    className="mn-toggle__slider"
                    onClick={() => props.onChange(!props.value)}
                ></span>
            </div>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}
