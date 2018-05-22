import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post } from './../axios';

import { fetchMovies } from './../actions';

class Search extends Component{
    state = {
        term: ''
    }

    handleSubmit = () => {
        post('movies/new', {
            userId: this.props.loggedUser,
            title: this.state.term
        })
        .then(res => {
            this.props.fetchMovies(this.props.loggedUser);
            this.setState({ term: '' });
        });
    }

    render(){
        return (
            <div className='input-group search'>
                <input type='text' className='form-control input-lg btn-lg' placeholder='Type title of movie...' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value } )}/>
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary btn-lg' onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedUser: state.loggedUser
});

export default connect(mapStateToProps, { fetchMovies } )(Search);