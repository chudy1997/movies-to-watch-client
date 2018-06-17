import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ReactLoading from 'react-loading';

import Header from './header';
import Main from './main';
import Movies from './movies';
import MovieDetails from './movieDetails';

class App extends Component{
  render(){
    return (
      <div className='app'>
        <NotificationContainer />
        <Route path='/' component={Header} />
        {this.props.loading && <ReactLoading type={'bars'} className='react-loading' color={'#0275d8'} height={200} width={150} /> }
        <Switch>
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/movies' component={Movies}/>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default withRouter(connect(mapStateToProps, {  })(App));