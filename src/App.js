import React, { Fragment } from 'react';


import Jianshu from './pages/Jianshu';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Jianshu></Jianshu>
      </Provider>
    </Fragment>
  );
}