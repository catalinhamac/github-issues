import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from '../../../config/route-config';
import { OpenIssues } from '../../open-issues/OpenIssues';
import { ClosedIssues } from '../../closed-issues/ClosedIssues';
import { NoMatch } from '../NoMatch';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Redirect exact from={AppRoute.Home} to={AppRoute.Open} />
      <Route exact path={AppRoute.Open}>
        <OpenIssues />
      </Route>
      <Route exact path={AppRoute.Closed}>
        <ClosedIssues />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};
