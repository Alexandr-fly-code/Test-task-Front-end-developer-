import * as a from '../constants';

export const getItems = (data) => ({
    type: a.FETCH_SUCCESS,
    data,
});