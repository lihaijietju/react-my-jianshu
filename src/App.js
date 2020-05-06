import React, { Fragment } from 'react';


import TodoList from './pages/TodoList';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    </Fragment>
  );
}