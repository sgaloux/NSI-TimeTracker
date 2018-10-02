import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

let render = () => {
  // tslint:disable-next-line:no-require-imports
  const { App } = require('./app');
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('App')
  );
};

render();
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(render);
}
