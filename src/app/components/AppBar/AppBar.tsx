import React from 'react';
import './AppBar.less';

import { formateDate, getCurrentDay } from '../../lib/helpers';
import { Button } from '../Button/Button';

export interface IAction {
    label: string;
    type: 'primary' | 'secondary';
}

export interface IAppBarProps {
    actions: IAction[];
}

export function AppBar(props: IAppBarProps) {
    const now = getCurrentDay();
    const nowString = formateDate(now);

    return (
        <header className="mn-app-bar">
            <div className="mn-app-bar__left">
                <h3 className="mn-app-bar__left-title">
                    <em className="mn-bold">Markdown</em> Notes
                </h3>
                <h3>
                    <time
                        className="mn-bold"
                        dateTime={String(Number(now))}
                    >
                        {nowString}
                    </time>
                </h3>
            </div>
            <div className="mn-app-bar__right">
                <ol className="mn-app-bar__right-actions">
                    {props.actions.map((action) => {
                        return (
                            <li key={action.label} className={`mn-app-bar__right-action`}>
                                <Button type={action.type}>
                                    {action.label}
                                </Button>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </header>
    );
}
