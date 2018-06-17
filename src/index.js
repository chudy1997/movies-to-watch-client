import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();