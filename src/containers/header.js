import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { logOut } from './../actions'

class Header extends Component{
    logOut = () => {
        this.props.logOut();
        this.props.history.push('/');
    }

    renderLogout = () => {
        return this.props.loggedUser !== -1 ? (
            <GoogleLogout
                buttonText="Log out"
                onLogoutSuccess={this.logOut}
            />)
            : '';
    }

    render(){
        console.log(this.props.location.pathname);
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className='navbar-brand' to='/'>Movies to watch</Link>
                {this.renderLogout()}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedUser: state.loggedUser
});

export default connect(mapStateToProps, { logOut })(Header);