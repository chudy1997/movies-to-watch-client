import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './signIn';
import Logged from './logged';

class Main extends Component{
    render(){
        const { loggedUserToken } = this.props;
        return loggedUserToken !== null ? <Logged loggedUserToken={loggedUserToken}/> : <SignIn history={this.props.history} />
    }
}

const mapStateToProps = (state) => ({
    loggedUserToken: state.loggedUser
});

export default connect(mapStateToProps)(Main);