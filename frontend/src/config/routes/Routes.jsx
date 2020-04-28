import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import routesList from './routesList';

const switchRoutes = (
  <Switch>
    {routesList.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    <Redirect from="*" to="/dashboard" />
  </Switch>
);

export default switchRoutes;
