import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { NotificationManager } from 'react-notifications'; 

import config from './../config.json';
import { signIn, changeLoading } from './../actions';
import { post } from './../axios';

class SignIn extends Component{
    handleSuccess = (response) => {
        const token = response.getAuthResponse().id_token;

        this.props.changeLoading(true);
        post('login', {
            token: token
        })
        .then(resp => {
            NotificationManager.success('Successfully logged in.');
            this.props.signIn(token);
            this.props.changeLoading(false);
            this.props.history.push('/');
        });
    }

    render(){
        return (
            <div className='sign-in'>
                <h3 className='sign-in-info'>You are not logged in yet...</h3>
                <GoogleLogin
                    clientId={config.CLIENT_ID ? config.CLIENT_ID : process.env.REACT_APP_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={this.handleSuccess}
                    onFailure={(e) => console.log(e)}
                    isSignedIn={true}
                    disabled={this.props.loading}
                    prompt='select_account'
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps, { signIn, changeLoading })(SignIn);