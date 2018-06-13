import _ from 'lodash';

import { FETCH_MOVIES, FETCH_MOVIE } from './../actions';

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_MOVIES:
            return _.mapKeys(action.payload.data, 'movieJSON.id');
        case FETCH_MOVIE:
            const data = action.payload.data;
            return {
                ...state,
                [data.id]: data
            }
        default: 
            return state;
    }
}