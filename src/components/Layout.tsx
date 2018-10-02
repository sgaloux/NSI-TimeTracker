import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'react-emotion';
import NavigationBar from './NavigationBar';
import mapStore from '../utils/mapStore';
import RootStore from '../stores/RootStore';

export interface LayoutProps {
  rootStore?: typeof RootStore.Type;
}

export interface LayoutState {}

const MainContainer = styled('div')({
  padding: 5,
  paddingTop: 60
});

@inject(
  mapStore(root => ({
    rootStore: root
  }))
)
@observer
export default class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { applicationTitle } = this.props.rootStore!;
    return (
      <div>
        <NavigationBar applicationTitle={applicationTitle} />
        <MainContainer>{this.props.children}</MainContainer>
      </div>
    );
  }
}
