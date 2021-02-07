import React from 'react';
import { INote } from '../../typings/data';
import {
    NoteCreatorContext,
    TNoteCreatorContext
} from './NoteCreatorContext';

export interface INoteCreatorContextProviderProps {
    children: React.ReactNode;
}

const initialNote = {
    id: undefined,
    body: '',
    title: 'New Note',
    isGlobal: false,
    createdAt: undefined
}

export class NoteCreatorContextProvider
    extends React.Component<INoteCreatorContextProviderProps, TNoteCreatorContext> {

    constructor(props: INoteCreatorContextProviderProps) {
        super(props);

        this.state = {
            ...initialNote,
            onBodyChanged: this.handleBodyChange,
            onTitleChanged: this.handleChangeTitle,
            onIsGlobalChanged: this.handleChangeIsGlobal,
            onResetNote: this.handleResetNote,
            onEditNote: this.handleEditNote
        }
    }


    handleBodyChange = (body: string) => {
        this.setState({ body });
    };

    handleChangeTitle = (title: string) => {
        this.setState({ title });
    };

    handleChangeIsGlobal = (isGlobal: boolean) => {
        this.setState({ isGlobal });
    };

    handleResetNote = () => {
        this.setState({
            ...initialNote
        })
    }

    handleEditNote = (note: INote) => {
        this.setState({
            id: note.id,
            body: note.body,
            title: note.title,
            createdAt: note.createdAt,
            isGlobal: note.isGlobal
        })
    }

    render() {
        return (
            <NoteCreatorContext.Provider value={this.state}>
                {this.props.children}
            </NoteCreatorContext.Provider>
        );
    }
}
