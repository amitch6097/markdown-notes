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

export enum AppBarActions {
    MAIN_CREATE = 'main.create',
    CREATE_CANCEL = 'create.cancel',
    CREATE_SAVE = 'create.save'
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

    static AppBarMainActions: IAction[] = [
        {
            key: AppBarActions.MAIN_CREATE,
            label: 'Create Note',
            type: 'primary',
        },
    ]

    static AppBarCreateActions: IAction[] = [
        {
            key: AppBarActions.CREATE_CANCEL,
            label: 'Cancel',
            type: 'secondary',
        },
        {
            key: AppBarActions.CREATE_SAVE,
            label: 'Save Note',
            type: 'primary',
        },
    ]


    static AppBar({ page, onChangePage }) {
        const { onSaveNote } = React.useContext(NotesContext);
        const { id, body, title, isGlobal, onResetNote } = React.useContext(
            NoteCreatorContext
        );

        function handleSaveNote() {
            onSaveNote({
                id,
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

        function onClickAction(key: string) {
            switch(key) {
                case AppBarActions.MAIN_CREATE: 
                    onChangePage(Pages.CREATE_AND_EDIT);
                    break;
                case AppBarActions.CREATE_CANCEL: 
                    handleCancelNote();
                    break;
                case AppBarActions.CREATE_SAVE: 
                    handleSaveNote();
                    break;
            }
        }

        const actions = page === Pages.MAIN ? App.AppBarMainActions : App.AppBarCreateActions;
        return <AppBar actions={actions} onClickAction={onClickAction} />;
    }

    static MainPage({ onChangePage }) {
        const { globalNotes, dateNotes } = React.useContext(NotesContext);
        const { onEditNote } = React.useContext(NoteCreatorContext);

        function handleClickEditNote(note: INote) {
            onEditNote(note);
            onChangePage(Pages.CREATE_AND_EDIT);
        }

        return (
            <Main
                globalNotes={Object.values(globalNotes)}
                dateNotes={dateNotes}
                onClickEditNote={handleClickEditNote}
            />
        );
    }
}
