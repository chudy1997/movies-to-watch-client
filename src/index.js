import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { NotificationContainer } from 'react-notifications';

import registerServiceWorker from './registerServiceWorker';
import Header from './components/header';
import Main from './components/main';
import Movies from './components/movies';
import MovieDetails from './components/movieDetails';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='app'>
        <NotificationContainer />
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/movies' component={Movies}/>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();