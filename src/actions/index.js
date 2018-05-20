import { get } from './../axios';

const movies = [
    {
        "Id":"tt1201607",
        "Title":"Harry Potter and the Deathly Hallows: Part 2",
        "Year":"2011",
        "Runtime":"130 min",
        "Genre":"Adventure, Drama, Fantasy",
        "Director":"David Yates",
        "Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
        "Plot":"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
        "Poster":"https://ia.media-imdb.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings":[
            {
                "Source":"Internet Movie Database",
                "Value":"8.1/10"
            },
            {
                "Source":"Rotten Tomatoes",
                "Value":"96%"
            },
            {
                "Source":"Metacritic",
                "Value":"87/100"
            }
        ],
        "Production":"Warner Bros. Pictures",
        "Website":"http://www.HarryPotter.com/",
    },
    {
        "Id":"tt1375666",
        "Title":"Inception",
        "Year":"2010",
        "Runtime":"148 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"Christopher Nolan",
        "Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot":"A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Awards":"Won 4 Oscars. Another 152 wins & 204 nominations.",
        "Poster":"https://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Ratings":[
            {
                "Source":"Internet Movie Database",
                "Value":"8.8/10"
            },
            {
                "Source":"Rotten Tomatoes",
                "Value":"86%"
            },
            {
                "Source":"Metacritic",
                "Value":"74/100"
            }
        ],
        "Production":"Warner Bros. Pictures",
        "Website":"http://inceptionmovie.warnerbros.com/",
    }
];

export const SIGN_IN = 'SIGN_IN';
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: -1
    }
}

export const FETCH_MOVIE = 'FETCH_MOVIE';
// export const fetchMovie = (userId, id) => {
//     const req = get(`movies/${id}`, {
//         userId: userId
//     });

//     return {
//         type: FETCH_MOVIE,
//         payload: req
//     }
// }

export const fetchMovie = (userId, id) => {
    return {
        type: FETCH_MOVIE,
        payload: { data: movies.filter(movie => movie.Id == id)[0] }
    }
}

export const FETCH_MOVIES = 'FETCH_MOVIES';
// export const fetchMovies = (userId) => {
//     const req = get('movies', {
//         userId: userId
//     });

//     return {
//         type: FETCH_MOVIES,
//         payload: req
//     }
// }



export const fetchMovies = (userId) => {
    return {
        type: FETCH_MOVIES,
        payload: { data: movies }
    }
}