import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from './../actions';

class MovieDetails extends Component {
    componentDidMount(){
        const { loggedUser } = this.props;
        const { id } = this.props.match.params;
        this.props.fetchMovie(loggedUser, id);
    }

    render(){
        if(this.props.loggedUser === -1){
            this.props.history.push('/');
            return (<div></div>);
        }

        if(!this.props.movie)
            return (<div>Loading...</div>);

        const { Id, Title, Poster, Year, Runtime, Genre, Director, Production, Website, Actors, Ratings, Awards, Plot } = this.props.movie;
        return (
            <div className='movie-details'>
                <Link className='btn btn-danger' to='/movies'>Go back to movies</Link>
                <div className='movie-details-info'>
                    <img src={Poster} width='400' class="float-right" />
                    <div className='movie-details-info-text'>
                        <div className='movie-details-info-main'>
                            <h1>Title: '{Title}'</h1>
                            <h3>Year: {Year}</h3>
                            <h3>Runtime: {Runtime}</h3>
                            <h3>Genre: {Genre} </h3>
                        </div>
                        <div className='movie-details-info-production'>
                            <h5>Director: {Director}</h5>
                            <h5>Actors: {Actors}</h5>
                            <h5>Production: {Production}</h5>
                            <h5>Website: <a href={Website}>{Title}</a></h5>
                        </div>
                        <div className='movie-details-info-ratings'>
                            <h6>Awards: {Awards}</h6>
                            <h6>Ratings: </h6>
                            <ul className='ratings'>
                                {Ratings.map(rating => <li className='rating'>{rating.Source}: {rating.Value}</li>)}
                            </ul>
                        </div>
                        <h6>Plot: </h6>
                        <p>{Plot}</p>
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

