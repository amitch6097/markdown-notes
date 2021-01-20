import React from 'react';
import { formateDate } from '../../lib/helpers';
import { INote } from '../../typings/data';
import './NoteListItem.less';

export interface INoteListItemProps {
    note: INote;
    onClick: (note: INote) => void;
}

export function NoteListItem(props: INoteListItemProps) {
    return (
        <button onClick={() => props.onClick(props.note)} className="mn-note-list-item">
            <label className="mn-bold">{props.note.title} </label>
            <div className="mn-note-list-item__sub-label">
                <time className="mn-note-list-item__sub-label-updated-at" dateTime={String(props.note.updatedAt)}>
                    {`Updated last: ${formateDate(
                        new Date(props.note.updatedAt)
                    )}`}{' '}
                </time>
                <p>
                    <em>{props.note.body}</em>
                </p>
            </div>
        </button>
    );
}
