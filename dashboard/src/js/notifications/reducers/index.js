

// export default function notifs(state = [], action) {
//   if (!action || !action.type) return state;

//   switch (action.type) {
//     case "NOTIF_SEND":
//       return [action.payload, ...state];
//     case "NOTIF_DISMISS":
//       return state.filter(notif =>
//           notif.id !== action.payload
//       );
//     case "NOTIF_CLEAR":
//       return [];
//     default:
//       return state;
//   }
// }

import {createReducer} from '../../utils';
// Add the following for IE compatability
// Object.assign = Object.assign || require('object-assign'); 

const initialState = {
    'small': [],
    'big': [],
};

export default createReducer(initialState, {
    ['NOTIF_SEND']: (state, payload) => {
        return Object.assign({}, state, {
            'small': [payload, ...state.small]
        });
    },
    ['NOTIF_DISMISS']: (state, payload) => {
        return Object.assign({}, state, {
            'small': state.small.filter(notif =>
                      notif.id !== payload
                  )
        });
    },
    ['NOTIF_CLEAR']: (state, payload) => {
        return Object.assign({}, state, {
            'small': [],
            'big': []
        });
    },
    ['BIG_NOTIF_SEND']: (state, payload) => {
        return Object.assign({}, state, {
            'big': [payload, ...state.big]
        });
    },
    ['BIG_NOTIF_DISMISS']: (state, payload) => {
        return Object.assign({}, state, {
            'big': state.big.filter(notif =>
                      notif.id !== payload
                  )
        });
    },
});