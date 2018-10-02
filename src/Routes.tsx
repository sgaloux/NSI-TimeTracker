import { Router } from '@reach/router';
import * as React from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

export interface RoutesProps {}

export default class Routes extends React.Component<RoutesProps> {
  public render() {
    return (
      <Router>
        <HomePage path='/home' default={true} />
        <AboutPage path='/about' />
      </Router>
    );
  }
}
