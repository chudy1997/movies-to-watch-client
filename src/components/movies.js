import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Movie from './movie';
import Search from './search';

import { fetchMovies, changeLoading } from './../actions';

class Movies extends Component {
    componentDidMount(){
        window.onbeforeunload = (e) => {
            this.props.history.push('/');
        };

        this.props.changeLoading(true);
        this.props.fetchMovies(this.props.loggedUserToken)
            .then(() => this.props.changeLoading(false));
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

export default connect(mapStateToProps, { fetchMovies, changeLoading })(Movies);