import React from 'react';
import { CalendarList } from '../../components/CalendarList/CalendarList';
import { CalendarListInfiniteScroll } from '../../components/CalendarList/CalendarListInfiniteScroll';
import { DateNoteList } from '../../components/NoteList/DateNoteList';
import { NoteList } from '../../components/NoteList/NoteList';
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
}

export interface IMainState {
    selectedDatetime: number;
    selectedNote: undefined;
}

export class Main extends React.Component<IMainProps, IMainState> {
    state: IMainState = {
        selectedDatetime: Number(getCurrentDay()),
        selectedNote: undefined
    };

    handleClickDay = (selectedDatetime: number) => {
        this.setState({
            selectedDatetime,
        });
    };

    render() {
        return (
            <div className="mn-main">
                <div className="mn-main__global-notes">
                    <NoteList
                        notes={this.props.globalNotes}
                        label={'Global Notes'}
                    />
                </div>
                <div className="mn-main__date-notes">
                    <DateNoteList
                        dateNotes={
                            this.props.dateNotes
                                ? Object.values(this.props.dateNotes)
                                : ({} as any)
                        }
                        
                        label="Notes"
                    />
                </div>
                <div className="mn-main__date-calendar">
                    <CalendarListInfiniteScroll
                        selectedDatetime={this.state.selectedDatetime}
                        onClickDay={this.handleClickDay}
                        notes={this.props.dateNotes}
                    />
                </div>
            </div>
        );
    }
}
