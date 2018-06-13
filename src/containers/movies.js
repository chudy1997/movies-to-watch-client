import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Movie from './../components/movie';
import Search from './search';

import { fetchMovies } from './../actions';

class Movies extends Component {
    componentDidMount(){
        this.props.fetchMovies(this.props.loggedUserToken);
    }

    showMovies = () => {
        return ;
    }

    render = () => {
        const { loggedUserToken } = this.props;
        if(loggedUserToken === null){
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
                            <th></th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Runtime</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(this.props.movies, movie => (<Movie key={movie.movieJSON.id} history={this.props.history} movie={movie} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedUserToken: state.loggedUser,
    movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(Movies);