import * as a from '../constants';



export default function isActiveSecond(state = false, action) {
    switch (action.type){
        case a.IS_ACTIVE_SECOND_TEMPLATE:
        return !state

        default: return state;
    }
}