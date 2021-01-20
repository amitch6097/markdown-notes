import React from 'react';
import { NotesManager } from '../../lib/NotesManager';
import {
    NotesContext,
    TNotesContext
} from './NotesContext';

export interface INotesContextProviderProps {

}

export class NotesContextProvider
    extends React.Component<INotesContextProviderProps, TNotesContext> {
    manager: NotesManager;

    constructor(props) {
        super(props);
        // this.manager = new NotesManager({
        //     notes: {},
        //     globalNotes: {},
        // });

        this.state = {
            notes: {},
            globalNotes: {},
            onSaveNote: this.handleSaveNote
        };
    }

    handleSaveNote = ({ isGlobal, body, title }: {
        isGlobal: boolean, 
        body: string, 
        title: string
    }) => {

    }

    // componentDidMount() {
    //     this.manager = this.manager.load();
    //     this.setState({
    //         ...this.manager.data,
    //     });
    // }

    // add = (note: {
    //     title: string;
    //     body: string;
    //     isGlobal: boolean;
    // }) => {
    //     this.manager = this.manager.add(note);
    //     this.setState({
    //         ...this.manager.data,
    //     });
    //     this.save();
    // }

    // delete = (id: string) =>  {
    //     this.manager = this.manager.delete(id);
    //     this.setState({
    //         ...this.manager.data,
    //     });
    // }

    // save = async () => {
    //      await this.manager.save();
    // }

    render() {
        return (
            <NotesContext.Provider value={this.state}>
                {this.props.children}
            </NotesContext.Provider>
        );
    }
}
