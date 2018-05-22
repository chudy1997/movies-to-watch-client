import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Movie from './../components/movie';
import Search from './search';

import { fetchMovies } from './../actions';

class Movies extends Component {
    componentDidMount(){
        this.props.fetchMovies(this.props.loggedUser);
    }

    showMovies = () => {
        return ;
    }

    render = () => {
        const { loggedUser } = this.props;
        if(loggedUser === -1){
            this.props.history.push('/');
            return (
                <div>
                </div>
            );
        }
            
        return (
            <div className='form-group-lg'>
                <Search/>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Runtime</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(this.props.movies, movie => (<Movie history={this.props.history} {...movie}/>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedUser: state.loggedUser,
    movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Movies);