import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// PWA progressive web application 渐进式app
// serviceWorker会缓存之前缓存的页面，可以离线访问
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();
