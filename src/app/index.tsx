import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NewNote } from './pages/NewNote/NewNote';


const app = document.getElementById('app');

const Emphasis: React.FunctionComponent = (props) => <em>{props.children}</em>;

const App = () => (
    <div>
        Hello, <Emphasis>world</Emphasis>
        <NewNote />
    </div>
);

ReactDOM.render(<App />, app);
