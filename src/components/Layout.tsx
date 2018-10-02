import * as React from 'react';
import styled from 'react-emotion';
import NavigationBar from './NavigationBar/NavigationBar';

export interface LayoutProps {}

export interface LayoutState {}

const MainContainer = styled('div')({
  padding: 5,
  paddingTop: 60
});

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <NavigationBar />
        <MainContainer>{this.props.children}</MainContainer>
      </div>
    );
  }
}
