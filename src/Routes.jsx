import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './App';

import Home from './components/Home';
import Files from './components/Files';

export default (
<Route component={ App }>
  <IndexRedirect to="/"/>
  <Route path="/">
    <IndexRedirect to="home"/>
    <Route path="home" component={ Home }/>
    <Route path="files" component={ Files }/>
  </Route>
</Route>
);
