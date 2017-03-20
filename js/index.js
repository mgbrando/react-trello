require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const lists = ["Hot List", "Warm List", "Cold List"];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="The Board" lists={lists} />, document.getElementById('app'))
);
