import * as a from '../constants';


export default function addTemplates(state = [], action) {
    switch (action.type){
        case a.ADD_TEMPLATES_SUCCESS:
        return action.data;
        
        default: return state;
    }
}