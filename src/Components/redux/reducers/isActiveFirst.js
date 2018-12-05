import * as a from '../constants';

export default function isActiveFirst(state = false, action) {
    switch (action.type){
        case a.IS_ACTIVE_FIRST_TEMPLATE:
           return !state;

        default: return state;
    }
}