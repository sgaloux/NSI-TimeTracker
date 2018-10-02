import * as React from 'react';
import AboutPage from './pages/AboutPage';
import DashBoardPage from './pages/Dashboard';
import SettingsPage from './pages/Settings';
import { Switch, Route, Redirect } from 'react-router';
import { EPages } from './common/EPages';

export interface RoutesProps {}

export default class Routes extends React.Component<RoutesProps> {
  public render() {
    return (
      <Switch>
        <Route path={EPages.Dashboard} component={DashBoardPage} />
        <Route path={EPages.Settings} component={SettingsPage} />
        <Route path={EPages.About} component={AboutPage} />
        <Redirect to={EPages.Dashboard} />
      </Switch>
    );
  }
}
