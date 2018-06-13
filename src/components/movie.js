import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkMovie } from './../actions';

class Movie extends Component {
    state = {
        checked: this.props.movie.status
    }

    handleClick = (e) => {
        const checked = !this.props.movie.status;
        this.props.movie.status = checked;
        this.setState({ checked });
        checkMovie(this.props.loggedUserToken, this.props.movie);
        e.stopPropagation();
    };

    render(){
        const { id, title, year, runtime, genre } = this.props.movie.movieJSON;
        return (
            <tr 
                className='movie'
                key={id} 
                style={this.props.movie.status ? { backgroundColor: "lightgrey" }: {}}
                onClick={() => {
                    this.props.history.push(`/movies/${id}`)
                }}
            >
                <td style={{width: "20px"}}><input className="watched-checkbox" type="checkbox" checked={this.props.movie.status} onClick={this.handleClick} /></td>
                <td>{title}</td>
                <td>{year}</td>
                <td>{runtime}</td>
                <td>{genre}</td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedUserToken: state.loggedUser
});

export default connect(mapStateToProps, { checkMovie })(Movie);