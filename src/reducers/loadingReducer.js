import { LOAD } from './../actions';

export default function(state = false, action) {
    switch(action.type){
        case LOAD: 
            return action.payload;
        default: 
            return state;
    }
}