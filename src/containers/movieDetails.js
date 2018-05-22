import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { fetchMovie } from './../actions';
import { del } from './../axios';

class MovieDetails extends Component {
    componentDidMount(){
        const { loggedUser } = this.props;
        const { id } = this.props.match.params;
        const title = this.props.movie.title;
        this.props.fetchMovie(loggedUser, title);
    }

    handleDeleteClick = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to remove this movie?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const req = del('movie/delete', {
                            userId: this.props.loggedUser,
                            title: this.props.movie.title                            
                        })
                        .then(res => {
                            this.props.history.push('/movies');
                        });
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    
    render(){
        if(this.props.loggedUser === -1){
            this.props.history.push('/');
            return (<div></div>);
        }

        if(!this.props.movie)
            return (<div>Loading...</div>);

        const { id, title, poster, year, runtime, genre, director, production, website, actors, ratings, awards, plot } = this.props.movie;
        return (
            <div className='movie-details'>
                <Link className='btn btn-primary' to='/movies'>Go back to movies</Link>
                <button className='btn btn-danger' onClick={this.handleDeleteClick}>Remove</button>
                <div className='movie-details-info'>
                    <img src={poster} width='400' class="float-right" />
                    <div className='movie-details-info-text'>
                        <div className='movie-details-info-main'>
                            <h1>Title: '{title}'</h1>
                            <h3>Year: {year}</h3>
                            <h3>Runtime: {runtime}</h3>
                            <h3>Genre: {genre} </h3>
                        </div>
                        <div className='movie-details-info-production'>
                            <h5>Director: {director}</h5>
                            <h5>Actors: {actors}</h5>
                            <h5>Production: {production}</h5>
                            <h5>Website: <a href={website}>{title}</a></h5>
                        </div>
                        <div className='movie-details-info-ratings'>
                            <h6>Awards: {awards}</h6>
                            {/* <h6>Ratings: </h6>
                            <ul className='ratings'>
                                {Ratings.map(rating => <li className='rating'>{rating.Source}: {rating.Value}</li>)}
                            </ul> */}
                            <h6>Ratings: {ratings}</h6>
                        </div>
                        <h6>Plot: </h6>
                        <p>{plot}</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = ({ loggedUser, movies }, ownProps) => ({
    movie: movies[ownProps.match.params.id],
    loggedUser: loggedUser
});

export default connect(mapStateToProps, { fetchMovie })(MovieDetails);

