import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SystemServices from '../components/SystemServices';
import ServiceRequest from '../components/ServiceRequest/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ServiceRequest} />
        <Route exact path='/register' component={SystemServices} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;