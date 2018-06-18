import { get, post } from './../axios';

export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CHECK_MOVIE = 'CHECK_MOVIE';
export const LOAD = 'LOAD';

export const signIn = (token) => {
    return {
        type: SIGN_IN,
        payload: token
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null
    }
}

export const changeMovie = (movie) => {
    return {
        type: FETCH_MOVIE,
        payload: { data: movie }
    }
}

export const fetchMovie = (token, title) => {
    const req = get('movie', {
        token: token,
        title: title
    });

    return {
        type: FETCH_MOVIE,
        payload: req
    }
}

export const fetchMovies = (token, movies) => {
    return {
        type: FETCH_MOVIES,
        payload: movies ? {
            data: movies
        }
        : !token ? {
            data: []
        } 
        : get('movies', {
            token: token
        })
    }
}

export const checkMovie = (token, movie) => {
    post('movie/status', {
        token: token,
        title: movie.movieJSON.title,
        status: movie.status
    });

    return {
        type: FETCH_MOVIE,
        payload: { data: movie }
    }
}

export const changeLoading = (loading) => {
    document.body.style.pointerEvents = loading ? 'none' : 'all';
    return {
        type: LOAD,
        payload: loading
    }
}