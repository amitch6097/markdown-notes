import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { NoteCreatorContext } from './context/NoteCreator/NoteCreatorContext';
import { NoteCreatorContextProvider } from './context/NoteCreator/NoteCreatorContextProvider';
import { NotesContextProvider } from './context/Notes/NotesContextProvider';
import './index.less';
var remote = window.require('electron').remote;

const app = document.getElementById('app');

const Index = () => (
    <NoteCreatorContextProvider>
        <NotesContextProvider>
            <App />
        </NotesContextProvider>
    </NoteCreatorContextProvider>
);

ReactDOM.render(<Index />, app);
