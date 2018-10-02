import { Alignment, Classes, Navbar } from '@blueprintjs/core';
import * as React from 'react';
import { IconNames } from '@blueprintjs/icons';
import { EPages } from '../../common/EPages';
import ButtonLink from './ButtonLink';

export interface NavigationBarProps {}

export default class NavigationBar extends React.Component<
  NavigationBarProps,
  any
> {
  public render() {
    return (
      <Navbar fixedToTop={true} className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>NSI - Time Tracker</Navbar.Heading>
          <Navbar.Divider />
          <ButtonLink
            label='Dashboard'
            icon={IconNames.TIME}
            to={EPages.Dashboard}
          />
          <ButtonLink
            label='Settings'
            icon={IconNames.COG}
            to={EPages.Settings}
          />
          <ButtonLink
            label='About'
            icon={IconNames.PRESENTATION}
            to={EPages.About}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
