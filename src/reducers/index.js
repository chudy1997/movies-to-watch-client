import { combineReducers } from 'redux';
import userMoviesReducer from './userMoviesReducer';
import loggedUserReducer from './loggedUserReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  loggedUser: loggedUserReducer,
  movies: userMoviesReducer,
  loading: loadingReducer,
});

export default rootReducer;
