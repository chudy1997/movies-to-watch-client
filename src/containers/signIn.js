import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { signIn } from './../actions';

class SignIn extends Component{
    CLIENT_ID = '524087473078-p1v8lbg0edsu6lhirkhav5c9flm8s4gp.apps.googleusercontent.com';

    handleSuccess = (response) => {
        const userId = response.profileObj.googleId;
        this.props.signIn(userId);
        this.props.history.push('/');
    }

    render(){
        return (
            <div className='sign-in'>
                <h3 className='sign-in-info'>You are not logged in yet...</h3>
                <GoogleLogin
                    clientId={this.CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={this.handleSuccess}
                />
            </div>
        );
    }
}

export default connect(null, { signIn })(SignIn);