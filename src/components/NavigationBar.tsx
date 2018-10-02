import { Alignment, Classes, Navbar } from '@blueprintjs/core';
import * as React from 'react';

export interface NavigationBarProps {
  applicationTitle: string;
}

export default class NavigationBar extends React.Component<
  NavigationBarProps,
  any
> {
  public render() {
    const { applicationTitle } = this.props;
    return (
      <Navbar fixedToTop={true} className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{applicationTitle}</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
      </Navbar>
    );
  }
}
