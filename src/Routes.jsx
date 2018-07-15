import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './App';

import Home from './components/pages/home/Home';
import Files from './components/pages/files/Files';
import Papers from './components/pages/papers/Papers';

export default (
<Route component={ App }>
  <IndexRedirect to="/"/>
  <Route path="/">
    <IndexRedirect to="home"/>
    <Route path="home" component={ Home }/>
    <Route path="files" component={ Files }/>
    <Route path="paper" component={ Papers }/>
  </Route>
</Route>
);
