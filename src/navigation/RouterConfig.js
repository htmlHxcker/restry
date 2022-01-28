import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import {
  ACCOUNT, LOGIN, ROOT, STATS,
} from './CONSTANTS';

function RouterConfig() {
  return (
    <Routes>
      <Route exact path={ROOT} element={<Home />} />
      <Route exact path={LOGIN} />
      <Route exact path={ACCOUNT} />
      <Route exact path={STATS} />
    </Routes>
  );
}

export default RouterConfig;
