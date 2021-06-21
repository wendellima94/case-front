import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import HomePage from '../components/HomePage/index,';
import SystemServices from '../components/SystemServices';
import ServiceRequest from '../components/ServiceRequest/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/services' component={ServiceRequest} />
        <Route exact path='/services/register' component={SystemServices} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;