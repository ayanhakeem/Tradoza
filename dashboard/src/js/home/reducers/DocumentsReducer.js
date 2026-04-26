import {createReducer} from '../../utils';
// Add the following for IE compatability
Object.assign = Object.assign || require('object-assign'); 

const initialState = {
   'count': 0,
   'receiving': false,
   'pages': 0,
   'list': []
};

export default createReducer(initialState, {
    ['RECEIVED_DOCUMENTS']: (state, payload) => {
        return {
            'count': payload.count,
            'pages': payload.pages,
            'list': payload.documents,
            'receiving': false
        };
    },
    ['RETRIVING_DOCUMENTS']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': true
        });
    }
});