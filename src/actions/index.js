import { get } from './../axios';

export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: -1
    }
}

export const fetchMovie = (userId, title) => {
    const req = get('movie', {
        userId: userId,
        title: title
    });

    return {
        type: FETCH_MOVIE,
        payload: req
    }
}

export const fetchMovies = (userId) => {
    const req = get('movies', {
        userId: userId
    });

    return {
        type: FETCH_MOVIES,
        payload: req
    }
}