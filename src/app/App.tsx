import React from 'react';
import { AppBar, IAction } from './components/AppBar/AppBar';
import { NoteCreatorContext } from './context/NoteCreator/NoteCreatorContext';
import { NotesContext } from './context/Notes/NotesContext';
import { CreateAndEdit } from './pages/CreateAndEdit/CreateAndEdit';
import { Main } from './pages/Main/Main';
import { INote } from './typings/data';
import './App.less';

export enum Pages {
    MAIN = 'main',
    CREATE_AND_EDIT = 'create-and-edit',
}

export interface IAppState {
    page: Pages;
}

export class App extends React.Component<{}, IAppState> {
    state = {
        page: Pages.MAIN,
    };

    handleChangePage = (page: Pages) => {
        this.setState({ page });
    };

    render() {
        return (
            <div className="mn-body">
                <div className="mn-body__app-bar">
                    <App.AppBar
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                    />
                </div>
                <div className="mn-body__content">
                    <div className={`mn-body__content-container mn-body__content-container--${this.state.page}`}>
                        <div className="mn-body__content-main">
                            <App.MainPage
                                onChangePage={this.handleChangePage}
                            />
                        </div>
                        <div className="mn-body__content-create-and-edit">
                            <CreateAndEdit />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    static AppBar({ page, onChangePage }) {
        const { onSaveNote } = React.useContext(NotesContext);
        const { body, title, isGlobal, onResetNote } = React.useContext(
            NoteCreatorContext
        );

        function handleSaveNote() {
            onSaveNote({
                body,
                title,
                isGlobal,
            });
            onChangePage(Pages.MAIN);
            onResetNote();
        }

        function handleCancelNote() {
            onChangePage(Pages.MAIN);
            onResetNote();
        }

        const actions: IAction[] = React.useMemo(() => {
            if (page === Pages.MAIN) {
                return [
                    {
                        label: 'Create Note',
                        type: 'primary',
                        callback: () => onChangePage(Pages.CREATE_AND_EDIT),
                    },
                ];
            } else if (page === Pages.CREATE_AND_EDIT) {
                return [
                    {
                        label: 'Cancel',
                        type: 'secondary',
                        callback: handleCancelNote,
                    },
                    {
                        label: 'Save Note',
                        type: 'primary',
                        callback: handleSaveNote,
                    },
                ];
            } else {
                return [];
            }
        }, [page]);

        return <AppBar actions={actions} />;
    }

    static MainPage({ onChangePage }) {
        const { globalNotes, notes } = React.useContext(NotesContext);
        const { onEditNote } = React.useContext(NoteCreatorContext);

        function handleClickEditNote(note: INote) {
            onEditNote(note);
            onChangePage(Pages.CREATE_AND_EDIT);
        }

        return (
            <Main
                globalNotes={Object.values(globalNotes)}
                dateNotes={notes}
                onClickEditNote={handleClickEditNote}
            />
        );
    }
}
