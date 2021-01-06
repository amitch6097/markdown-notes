import React from 'react';
import { NotesManager } from '../../lib/NotesManager';
import {
    NotesContext,
    INotesContext,
    INotesContextActions,
} from './NotesContext';

export class NotesContextProvider
    extends React.Component<any, INotesContext>
    implements INotesContextActions {
    manager: NotesManager;

    constructor(props) {
        super(props);
        this.manager = new NotesManager({
            notes: {},
            globalNotes: {},
        });

        this.state = {
            actions: {
                add: this.add,
            },
            ...this.manager.data,
        };
    }

    componentDidMount() {
        this.manager = this.manager.load();
        this.setState({
            ...this.manager.data,
        });
    }

    add = (note: {
        title: string;
        body: string;
        isGlobal: boolean;
    }) => {
        this.manager = this.manager.add(note);
        this.setState({
            ...this.manager.data,
        });
        this.save();
    }

    delete = (id: string) =>  {
        this.manager = this.manager.delete(id);
        this.setState({
            ...this.manager.data,
        });
    }

    save = async () => {
         await this.manager.save();
    }

    render() {
        return (
            <NotesContext.Provider value={this.state}>
                {this.props.children}
            </NotesContext.Provider>
        );
    }
}
