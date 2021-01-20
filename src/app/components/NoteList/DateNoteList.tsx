import React from 'react';
import { INote } from '../../typings/data';
import { NoteListItem } from './NoteListItem';
import './DateNoteList.less';
import { formateDate } from '../../lib/helpers';

export interface IDateNoteListProps {
    label: string;
    dateNotes?: Array<{
        date: number;
        notes: INote[]; // notes should be ordered by now
    }>; // dates should be ordered;
    onClickNote: (note: INote) => void;
}

export function DateNoteList(props: IDateNoteListProps) {
    return (
        <div className="mn-date-note-list">
            <h4 className="mn-date-note-list__header">{props.label}</h4>
            <ol className="mn-date-note-list__dates-list">
                {props.dateNotes?.length ? (
                    props.dateNotes.map((dateNote) => {
                        return (
                            <li
                                key={Number(dateNote.date)}
                                className="mn-date-note-list__dates-list-item"
                            >
                                <DateListItem
                                    onClick={props.onClickNote}
                                    {...dateNote}
                                />
                            </li>
                        );
                    })
                ) : (
                    <h4>
                        <em>No Notes Yet</em>
                    </h4>
                )}
            </ol>
        </div>
    );
}

export interface IDateListItemProps {
    date: number;
    notes: INote[]; // notes should be ordered by now
    onClick: (note: INote) => void;
}

export function DateListItem(props: IDateListItemProps) {
    return (
        <div className="mn-date-list-item">
            <time
                className="mn-date-list-item__date"
                dateTime={String(Number(props.date))}
            >
                <em>{formateDate(new Date(props.date))}</em>
            </time>
            <ol className="mn-date-list-item__notes-list">
                {props.notes.map((note) => {
                    return (
                        <li
                            key={note.id}
                            className="mn-date-list-item__notes-list-item"
                        >
                            <NoteListItem onClick={props.onClick} note={note} />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
