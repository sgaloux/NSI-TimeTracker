import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import RootStore from './stores/RootStore';
import { Provider } from 'mobx-react';
import Routes from './Routes';
import Layout from './components/Layout';

const store = RootStore.create({});
if (process.env.NODE_ENV !== 'production') {
  (window as any).rootStore = store;
}

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Layout>
            <Routes />
          </Layout>
        </HashRouter>
      </Provider>
    );
  }
}
