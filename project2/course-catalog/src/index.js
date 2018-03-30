import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var app = (
  	<App />
	)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
