import PropTypes from 'prop-types';
import React from 'react';
import { Switch } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import DashBoard from '~/pages/DashBoard';
import Service from '~/pages/Service';
import ServiceDetails from '~/pages/ServiceDetails';
import Suggestions from '~/pages/Suggestions';
import PhotoType from '~/pages/PhotoType';
import Terms from '~/pages/Terms';

import Treatments from '~/pages/Treatments';
import Clients from '~/pages/Clients';
import Matrix from '~/pages/Matrix';

import ProfileMatrix from '~/pages/ProfileMatrix';
import ProfileUnit from '~/pages/ProfileUnit';
import ProfileEmployee from '~/pages/ProfileEmployee';
import ProfileClient from '~/pages/ProfileClient';

import NewTreatment from '~/pages/NewTreatment';
import NewMatrix from '~/pages/NewMatrix';
import NewUnit from '~/pages/NewUnit';
import NewEmployee from '~/pages/NewEmployee';
import NewClient from '~/pages/NewClient';
import NewSale from '~/pages/NewSale';
import NewSession from '~/pages/NewSession';

// import { store } from '~/store';

export default function Routes({ store }) {
  return (
    <Switch>
      <Route store={store} path="/" exact component={SignIn} />
      <Route store={store} path="/signup" component={SignUp} isPrivate />

      <Route store={store} path="/dashboard" component={DashBoard} isPrivate />
      <Route store={store} path="/service" component={Service} isPrivate />
      <Route
        store={store}
        path="/servicedetails"
        component={ServiceDetails}
        isPrivate
      />
      <Route
        store={store}
        path="/suggestions"
        component={Suggestions}
        isPrivate
      />
      <Route store={store} path="/phototype" component={PhotoType} isPrivate />
      <Route store={store} path="/terms" component={Terms} isPrivate />

      <Route
        store={store}
        path="/treatments"
        component={Treatments}
        isPrivate
      />
      <Route store={store} path="/clients" component={Clients} isPrivate />
      <Route store={store} path="/matrix" component={Matrix} isPrivate />

      <Route
        store={store}
        path="/profilematrix"
        component={ProfileMatrix}
        isPrivate
      />
      <Route
        store={store}
        path="/profileunit"
        component={ProfileUnit}
        isPrivate
      />
      <Route
        store={store}
        path="/profileemployee"
        component={ProfileEmployee}
        isPrivate
      />
      <Route
        store={store}
        path="/profileclient"
        component={ProfileClient}
        isPrivate
      />

      <Route
        store={store}
        path="/newtreatment"
        component={NewTreatment}
        isPrivate
      />
      <Route store={store} path="/newmatrix" component={NewMatrix} isPrivate />
      <Route store={store} path="/newunit" component={NewUnit} isPrivate />
      <Route
        store={store}
        path="/newemployee"
        component={NewEmployee}
        isPrivate
      />
      <Route store={store} path="/newclient" component={NewClient} isPrivate />
      <Route store={store} path="/newsale" component={NewSale} isPrivate />
      <Route
        store={store}
        path="/newsession"
        component={NewSession}
        isPrivate
      />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

Routes.propTypes = {
  store: PropTypes.oneOfType([PropTypes.any, PropTypes.func]).isRequired,
};
