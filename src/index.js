import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

ReactDOM.render(
<Router routes={ Routes } history={ hashHistory }/>
, document.getElementById('root'));
registerServiceWorker();
