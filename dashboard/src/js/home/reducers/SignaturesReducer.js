import {createReducer} from '../../utils';
// Add the following for IE compatability
// Object.assign = Object.assign || require('object-assign'); 

const initialState = {
   'count': 0,
   'receiving': false,
   'pages': 0,
   'list': [],
   'lastUpdated': 0
};

export default createReducer(initialState, {
    ['RECEIVED_SIGNATURES']: (state, payload) => {
        return {
            'count': payload.PaginationData.ItemsCount,
            'pages': payload.PaginationData.PageCount,
            'list': payload.Data,
            'receiving': false,
            'lastUpdated': Date.now() 
        };
    },
    ['RETRIVING_SIGNATURES']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': true
        });
    },
    ['ERROR_RETRIVING_SIGNATURES']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': true
        });
    }
});