import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Base from './Base';

import Home from '../home/Home';
import Files from '../files/Files';
import Papers from '../papers/Papers';

export default (
<Route component={ Base }>
  <IndexRedirect to="/"/>
  <Route path="/">
    <IndexRedirect to="home"/>
    <Route path="home" component={ Home }/>
    <Route path="files" component={ Files }/>
    <Route path="paper" component={ Papers }/>
  </Route>
</Route>
);
