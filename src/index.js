import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/Store';


ReactDOM.render(
  <Provider store={Store({item: false})}>
  <App />,
 </Provider>,
document.getElementById('root')
);
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
