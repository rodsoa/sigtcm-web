import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import SignIn from '~/pages/SignIn';
import DashBoard from '~/pages/DashBoard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact component={DashBoard} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
