import * as a from '../constants';
export default function getItemsReducer(state = [], action) {
    switch (action.type){
        case a.FETCH_SUCCESS:
            return action.data;
        default: return state;
    }
}