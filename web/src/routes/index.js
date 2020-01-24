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
import NewMatrix from '~/pages/NewMatrix';
import NewUnit from '~/pages/NewUnit';
import NewEmployee from '~/pages/NewEmployee';
import NewClient from '~/pages/NewClient';
import ProfileMatrix from '~/pages/ProfileMatrix';
import ProfileUnit from '~/pages/ProfileUnit';
import ProfileEmployee from '~/pages/ProfileEmployee';

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
      <Route path="/profilematrix" component={ProfileMatrix} />
      <Route path="/profileunit" component={ProfileUnit} />
      <Route path="/profileemployee" component={ProfileEmployee} />
      <Route path="/newmatrix" component={NewMatrix} />
      <Route path="/newunit" component={NewUnit} />
      <Route path="/newemployee" component={NewEmployee} />
      <Route path="/newclient" component={NewClient} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
