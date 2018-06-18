import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post } from './../axios';
import { NotificationManager } from 'react-notifications'; 

import { fetchMovies, changeLoading } from './../actions';

class Search extends Component{
    state = {
        term: ''
    }

    handleSubmit = () => {
        this.props.changeLoading(true);
        post('movies/new', {
            token: this.props.loggedUserToken,
            title: this.state.term
        })
        .then(res => {
            if(res.status === 208){
                NotificationManager.warning(res.data);
                return;                
            }

            NotificationManager.success('Movie successfully added.');
            this.props.fetchMovies(this.props.loggedUserToken);
            this.setState({ term: '' });
        })
        .catch(({response}) => {
            if(response.status === 400){
                NotificationManager.warning(response.data);
                return;
            }
        })
        .finally(() => {
            this.props.changeLoading(false);   
        });
    }

    render(){
        return (
            <form className='input-group search' onSubmit={e => e.preventDefault()}>
                <input type='text' className='form-control input-lg btn-lg' placeholder='Type title of movie...' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value } )}/>
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary btn-lg' onClick={this.handleSubmit}>Submit</button>
                </span>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedUserToken: state.loggedUser
});

export default connect(mapStateToProps, { fetchMovies, changeLoading } )(Search);