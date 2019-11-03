import { 
    USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS,
    LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } 
from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
            ...state,
            isLoading: true
            }
        case USER_LOADED:
            console.log("statee: ", state);
            console.log("payload ", action.payload);
            return{
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
            }
        //action.payload user and token
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: 
            return state;
    }
}