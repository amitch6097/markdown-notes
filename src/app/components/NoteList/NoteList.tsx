import React from 'react';
import { INote } from '../../typings/data';
import './NoteList.less';

export interface INoteList {
    label: string;
    notes: Record<string, INote>;
}

export function NoteList(props: INoteList) {
    return (
        <div className="note-list">
            <div className="note-list__header">{props.label}</div>
            <ol className="note-list__list">
                {Object.keys(props.notes).map((key) => {
                    const note = props.notes[key];
                    return (
                        <li key={key} className="note-list__list-item">
                            <NoteListItem note={note} />;
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export interface INoteListItem {
    note: INote;
}

export function NoteListItem(props: INoteListItem) {
    return (
        <div className="note-list-item">
            <label>{props.note.title} </label>
            <time dateTime={String(props.note.updatedAt)}>
                {`Updated last: ${new Date(
                    props.note.updatedAt
                ).toLocaleDateString()}`}{' '}
            </time>
        </div>
    );
}
