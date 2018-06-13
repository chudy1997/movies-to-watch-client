import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { NotificationManager } from 'react-notifications'; 

import { signIn } from './../actions';
import { post } from './../axios';

class SignIn extends Component{
    CLIENT_ID = '524087473078-p1v8lbg0edsu6lhirkhav5c9flm8s4gp.apps.googleusercontent.com';

    handleSuccess = (response) => {
        const userId = response.profileObj.googleId;

        const req = post('login', {
            userId: userId
        })
        .then(resp => {
            NotificationManager.success('Successfully logged in.');
            this.props.signIn(resp.data);
            this.props.history.push('/');
        });
    }

    render(){
        return (
            <div className='sign-in'>
                <h3 className='sign-in-info'>You are not logged in yet...</h3>
                <GoogleLogin
                    clientId={this.CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={this.handleSuccess}
                    onFailure={(e) => console.log(e)}
                    isSignedIn={true}
                    prompt='select_account'
                />
            </div>
        );
    }
}

export default connect(null, { signIn })(SignIn);