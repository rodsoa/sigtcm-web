import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import DashBoard from '~/pages/DashBoard';
import Service from '~/pages/Service';
import Suggestions from '~/pages/Suggestions';

import Treatments from '~/pages/Treatments';
import NewTreatment from '~/pages/NewTreatment';
import Matrix from '~/pages/Matrix';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/service" component={Service} />
      <Route path="/suggestions" component={Suggestions} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/newtreatment" component={NewTreatment} />
      <Route path="/matrix" component={Matrix} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
