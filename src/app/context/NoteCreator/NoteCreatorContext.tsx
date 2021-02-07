import React from 'react';
import { INote } from '../../typings/data';

export interface INoteCreatorContextState {
    id?: string;
    body?: string;
    title?: string;
    isGlobal?: boolean;
    createdAt?: number,
}

export interface INoteCreatorContextActions {
    onBodyChanged: (body: string) => void;
    onTitleChanged: (title: string) => void;
    onIsGlobalChanged: (isGlobal: boolean) => void;
    onResetNote: () => void;
    onEditNote: (note: INote) => void;
}

export type TNoteCreatorContext = INoteCreatorContextState & INoteCreatorContextActions;

export const initialState: TNoteCreatorContext = {
    id: undefined,
    body: '',
    title: 'New Note',
    isGlobal: false,
    createdAt: undefined,
    onBodyChanged: (body: string) => {},
    onTitleChanged: (title: string) => {},
    onIsGlobalChanged: (isGlobal: boolean) => {},
    onResetNote: () => {},
    onEditNote: (note: INote) => {}
}

export const NoteCreatorContext = React.createContext(initialState)