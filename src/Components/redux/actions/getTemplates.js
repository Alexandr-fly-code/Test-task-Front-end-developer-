import * as a from '../constants';


export const getTemplatesRequest = () => ({
    type: a.GET_TEMPLATES_REQUEST,
});

export const getTemplatesSuccess = (data) => ({
    type: a.ADD_TEMPLATES_SUCCESS,
    data,
})