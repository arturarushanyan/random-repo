import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/main';
import registerServiceWorker from './registerServiceWorker';

let tasksList = ['Task 1', 'Task 2'];

ReactDOM.render(<Todo tasks = {tasksList}/>, document.getElementById('root'));
registerServiceWorker();
