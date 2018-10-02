import { RouteComponentProps } from '@reach/router';
import * as React from 'react';

export interface AboutPageProps extends RouteComponentProps {}

export default class AboutPage extends React.Component<AboutPageProps, any> {
  public render() {
    return <div>About Page</div>;
  }
}
