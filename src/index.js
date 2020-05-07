import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Globalstyle} from  './style';

// 将页面模板挂载到root dom上面
ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
