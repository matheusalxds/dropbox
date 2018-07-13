import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

ReactDOM.render(
<Router routes={ Routes } history={ browserHistory }/>
, document.getElementById('root'));
registerServiceWorker();
