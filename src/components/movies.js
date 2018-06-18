import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Movie from './movie';
import Search from './search';

import { fetchMovies, changeLoading } from './../actions';

class Movies extends Component {
    state = {
        direction: 0,
        initialOrder: []
    }

    componentDidMount(){
        if(this.props.loggedUserToken !== null){
            this.props.changeLoading(true);
            this.props.fetchMovies(this.props.loggedUserToken)
                .then((res) => { 
                    res.payload.data.forEach(el => this.state.initialOrder.push(el.movieJSON.id));
                    this.props.changeLoading(false)
                });
        }
    }

    sortByField(compareFun, direction){
        this.props.changeLoading(true);
        let movies = this.props.movies;
        movies = Object.keys(movies).map(key => movies[key]);
        const oldDirection = this.state.direction && Math.abs(this.state.direction) !== direction ? 0 : this.state.direction;
        
        const newDirection = oldDirection === 0 ? direction : oldDirection > 0 ? -1 * direction : 0;
        this.setState({direction: newDirection});

        if(oldDirection < 0){
            movies = movies.sort((a,b) => {
                return this.state.initialOrder.indexOf(a.movieJSON.id) - this.state.initialOrder.indexOf(b.movieJSON.id);
            });
        }
        else {
            if(newDirection !== 0)
                movies = movies.sort((a,b) => newDirection * compareFun(a,b));
        }

        this.props.fetchMovies(this.props.loggedUserToken, movies);
        this.props.changeLoading(false);
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
                            <th onClick={() => this.sortByField((a, b) => b.status ? 1 : -1, 1)}>
                                {this.state.direction === 1 ? <i className="fa fa-arrow-up"/> : this.state.direction === -1 ? <i className="fa fa-arrow-down"/> : ""}</th>
                            <th onClick={() => this.sortByField((a, b) => a.movieJSON.title < b.movieJSON.title ? 1 : -1, 2)}>Title 
                                {this.state.direction === 2 ? <i className="fa fa-arrow-up"/> : this.state.direction === -2 ? <i className="fa fa-arrow-down"/> : ""}</th>
                            <th onClick={() => this.sortByField((a, b) => a.movieJSON.year < b.movieJSON.year ? 1 : -1, 3)}>Year 
                                {this.state.direction === 3 ? <i className="fa fa-arrow-up"/> : this.state.direction === -3 ? <i className="fa fa-arrow-down"/> : ""}</th>
                            <th onClick={() => this.sortByField((a, b) => parseInt(a.movieJSON.runtime, 10) < parseInt(b.movieJSON.runtime, 10) ? 1 : -1, 4)}>Runtime 
                                {this.state.direction === 4 ? <i className="fa fa-arrow-up"/> : this.state.direction === -4 ? <i className="fa fa-arrow-down"/> : ""}</th>
                            <th onClick={() => this.sortByField((a, b) => a.movieJSON.genre < b.movieJSON.genre ? 1 : -1, 5)}>Genre 
                                {this.state.direction === 5 ? <i className="fa fa-arrow-up"/> : this.state.direction === -5 ? <i className="fa fa-arrow-down"/> : ""}</th>
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