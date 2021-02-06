import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { NoteCreatorContext } from './context/NoteCreator/NoteCreatorContext';
import { NoteCreatorContextProvider } from './context/NoteCreator/NoteCreatorContextProvider';
import { NotesContextProvider } from './context/Notes/NotesContextProvider';
import './index.less';
const remote = window.require('electron').remote;
const path = require('path');
const app = document.getElementById('app');

const defaultFilePath = path.resolve(__dirname, '../markdown-notes.json');

const Index = () => (
    <NoteCreatorContextProvider>
        <NotesContextProvider defaultFilePath={defaultFilePath}>
            <App />
        </NotesContextProvider>
    </NoteCreatorContextProvider>
);

ReactDOM.render(<Index />, app);
