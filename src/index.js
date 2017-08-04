import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StickyTableHeaders from 'sticky-table-headers';

let url = document.getElementById('root').dataset.source

ReactDOM.render(<App source={ url }/>, document.getElementById('root'));
registerServiceWorker();
