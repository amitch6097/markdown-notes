import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppBar } from './components/AppBar/AppBar';
import { NotesContextProvider } from './context/Notes/NotesContextProvider';
import './index.less';
import { Find } from './pages/Find/Find';
var remote = window.require('electron').remote;

const app = document.getElementById('app');

const Emphasis: React.FunctionComponent = (props) => <em>{props.children}</em>;

const App = () => (
    <NotesContextProvider>
        <div>
            <AppBar
                actions={[
                    {
                        label: 'Create Note',
                        type: 'primary',
                    },
                ]}
            />
            <Find />
        </div>
    </NotesContextProvider>
);

ReactDOM.render(<App />, app);
