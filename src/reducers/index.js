import { combineReducers } from 'redux';
import userMoviesReducer from './userMoviesReducer';
import loggedUserReducer from './loggedUserReducer';

const rootReducer = combineReducers({
  loggedUser: loggedUserReducer,
  movies: userMoviesReducer,
});

export default rootReducer;
