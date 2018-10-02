import { RouteComponentProps } from '@reach/router';
import * as React from 'react';

export interface HomePageProps extends RouteComponentProps {}

export default class HomePage extends React.Component<HomePageProps, any> {
  public render() {
    return <div>Home page is here</div>;
  }
}
