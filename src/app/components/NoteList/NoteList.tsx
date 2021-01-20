import React from 'react';
import { INote } from '../../typings/data';
import { NoteListItem } from './NoteListItem';
import './NoteList.less';

export interface INoteListProps {
    label: string;
    notes?: INote[]; // notes should be ordered by now
    onClickNote: (note: INote) => void;
}

export function NoteList(props: INoteListProps) {
    return (
        <div className="mn-note-list">
            <h4 className="mn-note-list__header">{props.label}</h4>
            <ol className="mn-note-list__list">
                {props.notes?.length ? (
                    props.notes.map((note) => {
                        return (
                            <li
                                key={note.id}
                                className="mn-note-list__list-item"
                            >
                                <NoteListItem
                                    onClick={props.onClickNote}
                                    note={note}
                                />
                            </li>
                        );
                    })
                ) : (
                    <h4><em>No Notes Yet</em></h4>
                )}
            </ol>
        </div>
    );
}
