import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'sticky-table-headers';

document.querySelectorAll('[data-type="table-compare"]').forEach((element) => {
	let url = element.dataset.source;
	let hide_col = (element.dataset.colHide || '').split(/,/).filter(v => !!v).map(v => Number(v))
	let sort_col = (element.dataset.colSort || '').split(/,/).filter(v => !!v).map(v => Number(v))
	ReactDOM.render(<App source={ url } hide_col={ hide_col } sort_col={ sort_col } />, element);
})

registerServiceWorker();

window.$(document).ready(() => {
	window.$('#compare-talbe__beaty').stickyTableHeaders()
})
