import {createReducer} from '../../utils';

const initialState = {
    token: null,
    refresh_token: null,
    expiration: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {
    ['LOGIN_USER_REQUEST']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    },
    ['LOGIN_USER_SUCCESS']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.token,
            'refresh_token': payload.refresh_token,
            'expiration': payload.expiration,
            'token': payload.token,
            'email':  payload.email,
            'statusText': 'You have been successfully logged in.'
        });

    },
    ['LOGIN_USER_FAILURE']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'email': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    },
    ['LOGOUT_USER']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'refresh_token': null,
            'expiration': null,
            'email': null,
            'statusText': 'You have been successfully logged out.'
        });
    },
    ['IS_AUTHENTICATING']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
        });
    },
    ['ERROR_AUTHENTICATING']: (state, payload) => {
        return Object.assign({}, state, {
            'statusText': payload,
            'isAuthenticating': false,
        });
    },
});