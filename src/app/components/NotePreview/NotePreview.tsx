import React from 'react';
import { INote } from '../../typings/data';
import { Button } from '../Button/Button';
import { MarkdownPreview } from '../MarkdownPreview/MarkdownPreview';
import './NotePreview.less';

export interface INotePreviewProps {
    note: INote;
    onCloseNote: () => void;
    onEditNote: () => void;
}

export function NotePreview(props: INotePreviewProps) {
    return (
        <div className="mn-note-preview">
            <div className="mn-note-preview__controls">
                <Button onClick={props.onEditNote} type="primary">Edit Note</Button>
                <Button onClick={props.onCloseNote} type="secondary">X</Button>
            </div>
            <h4 className="mn-note-preview__title mn-bold">{props.note.title}</h4>
            <div className="mn-note-preview__body">
                <MarkdownPreview value={props.note.body} />
            </div>
        </div>
    );
}
