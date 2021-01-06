import React from 'react';
import { INote } from '../../typings/data';

export interface INotesContextState {
    globalNotes: Record<string, INote>;
    notes: Record<string, INote>;
}

export interface INotesContextActions {
    add: (note: {
        title: string;
        body: string;
        isGlobal: boolean;
    }) => void;
}



export interface INotesContext {
    state: INotesContextState;
    actions: {
        add: (note: {
            title: string;
            body: string;
            isGlobal: boolean;
        }) => void;
    }
}

const initialState: INotesContext = {
    state: {
        globalNotes: {},
        notes: {},
    },
    actions: {
        add: () => {}
    }
}

export const NotesContext = React.createContext(initialState)