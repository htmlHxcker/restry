import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ACCOUNT, LOGIN, ROOT, STATS,
} from './CONSTANTS';

function RouterConfig() {
  return (
    <Switch>
      <Route exact path={ROOT} />
      <Route exact path={LOGIN} />
      <Route exact path={ACCOUNT} />
      <Route exact path={STATS} />
    </Switch>
  );
}

export default RouterConfig;
