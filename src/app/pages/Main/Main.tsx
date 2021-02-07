import React from 'react';
import { CalendarList } from '../../components/CalendarList/CalendarList';
import { CalendarListInfiniteScroll } from '../../components/CalendarList/CalendarListInfiniteScroll';
import { DateNoteList } from '../../components/NoteList/DateNoteList';
import { NoteList } from '../../components/NoteList/NoteList';
import { NotePreview } from '../../components/NotePreview/NotePreview';
import { getCurrentDay } from '../../lib/helpers';
import { INote } from '../../typings/data';

import './Main.less';

export interface IMainProps {
    globalNotes: INote[]; // notes should be ordered by now
    dateNotes: Record<
        string,
        {
            date: number;
            notes: INote[]; // notes should be ordered by now
        }
    >; // dates should be ordered;
    onClickEditNote: (note: INote) => void;
}

export interface IMainState {
    selectedDatetime: number;
    selectedNote: INote;
}

export class Main extends React.Component<IMainProps, IMainState> {
    state: IMainState = {
        selectedDatetime: Number(getCurrentDay()),
        selectedNote: undefined,
    };

    handleClickDay = (selectedDatetime: number) => {
        this.setState({
            selectedDatetime,
        });
    };

    handleCloseNote = () => {
        this.setState({
            selectedNote: undefined,
        });
    };

    handleEditNote = () => {
        this.props.onClickEditNote(this.state.selectedNote);
    };

    handleClickNote = (selectedNote: INote) => {
        this.setState({
            selectedNote,
        });
    };

    render() {
        return (
            <div className="mn-main">
                <div className="mn-main__global-notes">
                    <NoteList
                        onClickNote={this.handleClickNote}
                        notes={this.props.globalNotes}
                        label={'Global Notes'}
                    />
                </div>
                <div className="mn-main__date-notes">
                    <DateNoteList
                        onClickNote={this.handleClickNote}
                        dateNotes={
                            this.props.dateNotes
                                ? Object.values(this.props.dateNotes)
                                : ({} as any)
                        }
                        label="Notes"
                    />
                </div>
                <div className="mn-main__right">
                    <div
                        className={`mn-main__right-container ${
                            this.state.selectedNote
                                ? 'mn-main__right-container--selected-note'
                                : ''
                        }`}
                    >
                        <div className="mn-main__date-calendar">
                            <CalendarListInfiniteScroll
                                selectedDatetime={this.state.selectedDatetime}
                                onClickDay={this.handleClickDay}
                                notes={this.props.dateNotes}
                            />
                        </div>
                        <div className="mn-main__note-preview">
                            {this.state.selectedNote && (
                                <NotePreview
                                    note={this.state.selectedNote}
                                    onCloseNote={this.handleCloseNote}
                                    onEditNote={this.handleEditNote}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
