import React from 'react';
import { NotesManager, createNoteDocumentStore } from '../../lib/NotesManager';
import { FileManager } from '../../lib/FileManager';

import { NotesContext, TNotesContext } from './NotesContext';

export interface INotesContextProviderProps {
    defaultFilePath: string;
}

export class NotesContextProvider extends React.Component<
    INotesContextProviderProps,
    TNotesContext
> {
    private manager: NotesManager;

    constructor(props) {
        super(props);
        this.manager = new NotesManager({
            notes: createNoteDocumentStore(),
            globalNotes: createNoteDocumentStore(),
        });

        this.state = {
            ...this.manager.state,
            onSaveNote: this.handleSaveNote,
        };
    }

    handleSaveNote = async (note: {
        id?: string;
        isGlobal: boolean;
        body: string;
        title: string;
    }) => {
        if (note.id) {
            this.manager = await this.manager.update(
                note as {
                    id: string;
                    title: string;
                    body: string;
                    isGlobal: boolean;
                }
            );
        } else {
            this.manager = await this.manager.add(note);
        }
        this.setState(this.manager.state);
        const json = this.manager.toJSON();
        const content = JSON.stringify(json);
        await FileManager.save(this.props.defaultFilePath, content);
    };

    handleLoadDefaultFilePath = async () => {
        const content = await FileManager.load(this.props.defaultFilePath);
        if (content) {
            const json = JSON.parse(content);
            this.manager = await this.manager.load(json);
            this.setState(this.manager.state);
        }
    };

    componentDidMount() {
        this.handleLoadDefaultFilePath();
    }

    render() {
        return (
            <NotesContext.Provider value={this.state}>
                {this.props.children}
            </NotesContext.Provider>
        );
    }
}
