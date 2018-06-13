import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { NotificationManager } from 'react-notifications'; 

import { logOut } from './../actions';
import { post } from './../axios';

class Header extends Component{
    logOut = () => {
        const req = post('logout', {
            token: this.props.loggedUserToken
        })
        .then(token => {
            NotificationManager.success('Successfully logged out.');
            this.props.logOut();
            this.props.history.push('/');;
        });
    }

    renderLogout = () => {
        return this.props.loggedUserToken !== null ? (
            <GoogleLogout
                buttonText="Log out"
                onLogoutSuccess={this.logOut}
            />)
            : '';
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className='navbar-brand' to='/'>Movies to watch</Link>
                {this.renderLogout()}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedUserToken: state.loggedUser
});

export default connect(mapStateToProps, { logOut })(Header);