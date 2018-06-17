import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ReactLoading from 'react-loading';

import Header from './header';
import Main from './main';
import Movies from './movies';
import MovieDetails from './movieDetails';

function App(props){
    return (
      <div className='app'>
        <NotificationContainer />
        <Route path='/' component={Header} />
        {props.loading && <ReactLoading type={'bars'} className='react-loading' color={'#0275d8'} height={200} width={150} /> }
        <Switch>
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/movies' component={Movies}/>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    );
  }

  
const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(App);