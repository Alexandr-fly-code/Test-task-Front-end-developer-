import {combineReducers} from 'redux';
import getItems from './getItemsReducer';
import addTemplates from './addTemplates';
import isActiveFirst from './isActiveFirst';
import isActiveSecond from './isActiveSecond';
import isActiveThree from './isActiveThree';

const rootReducer = combineReducers({
    getItems,
    addTemplates,
    isActiveFirst,
    isActiveSecond,
    isActiveThree,
});

export default rootReducer;