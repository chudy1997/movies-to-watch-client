import _ from 'lodash';

import { FETCH_MOVIES, FETCH_MOVIE } from './../actions';

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_MOVIES:
            return _.mapKeys(action.payload.data, 'Id');
        case FETCH_MOVIE:
            const data = action.payload.data;
            return {
                ...state,
                [data.Id]: data
            }
        default: 
            return state;
    }
}