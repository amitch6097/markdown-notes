import React from 'react';
import './Find.less';

import { getTwelveMonths } from '../../lib/helpers';
import { CalendarList } from '../../components/CalendarList/CalendarList';
import { NotesContext } from '../../context/Notes/NotesContext';
import { NoteList } from '../../components/NoteList/NoteList';
import { NoteCreator } from '../../components/NoteCreator/NoteCreator';

export class Find extends React.Component<any, any> {
    constructor(props) {
        super(props);
        const months = getTwelveMonths(Number(new Date()));
        this.state = {
            months,
            creatingNote: true,
        };
    }

    render() {
        return (
            <div className="mn-find">
                <section className="mn-find__global-notes-list">
                    <Find.GlobalNotesList />
                </section>
                <section className="mn-find__notes-list">
                    <Find.NotesList />
                </section>

                {/* <section className="mn-find__months">
                    <CalendarList months={this.state.months} />
                </section> */}
                {this.state.creatingNote && (
                    <Find.NoteCreator
                        onCancel={() => this.setState({ creatingNote: false })}
                    />
                )}
            </div>
        );
    }

    static GlobalNotesList() {
        const { globalNotes } = React.useContext(NotesContext);
        return <NoteList label={'Global Notes'} notes={globalNotes} />;
    }

    static NotesList() {
        const { notes } = React.useContext(NotesContext);
        return <NoteList label={'Notes'} notes={notes} />;
    }

    static NoteCreator({ onCancel }) {
        const { actions } = React.useContext(NotesContext);
        return (
            <div className="mn-find-note-creator">
                <NoteCreator onSave={actions.add} onCancel={onCancel} />;
            </div>
        );
    }
}
