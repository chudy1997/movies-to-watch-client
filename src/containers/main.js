import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './signIn';
import Logged from './../components/logged';

class Main extends Component{
    render(){
        const { loggedUser } = this.props;
        return loggedUser !== -1 ? <Logged loggedUser={loggedUser}/> : <SignIn history={this.props.history} />
    }
}

const mapStateToProps = (state) => ({
    loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(Main);