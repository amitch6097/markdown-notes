import React from 'react';
import { INote } from '../../typings/data';

export interface INotesContextState {
    globalNotes: Record<string, INote>;
    notes: Record<
        string,
        {
            date: number;
            notes: INote[]; // notes should be ordered by now
        }
    >;
}

export interface INotesContextActions {
    onSaveNote: ({ isGlobal, body, title }: {
        isGlobal: boolean, 
        body: string, 
        title: string
    }) => void;
}

export type TNotesContext = INotesContextState & INotesContextActions;
const initialState: TNotesContext = {
    globalNotes: {},
    notes: {},
    onSaveNote: () => {}
};

export const NotesContext = React.createContext(initialState);
