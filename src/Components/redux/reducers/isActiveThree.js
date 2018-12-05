import * as a from '../constants';



export default function isActiveThree(state = false, action) {
    switch (action.type){
        case a.IS_ACTIVE_ALL_TEMPLATE:
        return !state

        default: return state;
    }
}