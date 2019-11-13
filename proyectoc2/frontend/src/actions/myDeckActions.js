import { GET_MY_DECK, ADD_MY_FLASHCARD, EDIT_MY_FLASHCARD, DELETE_MY_FLASHCARD, MY_DECK_LOADING } 
    from '../actions/types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import axios from 'axios';

export const getDeck = (id) => async (dispatch, getState) => {

    dispatch(setDeckLoading());
    try {
        const res = await axios.get('http://localhost:4000/api/decks/' + id, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: GET_MY_DECK,
            payload: res.data
        }));
    } catch (err) {
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
}

export const addMyDeck = (id, deck) => async (dispatch, getState) => {
    try {
        const res = await axios.post('http://localhost:4000/api/lessons/' + id +'/decks', deck, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: ADD_MY_FLASHCARD,
            payload: res.data
        }));

    }catch(err){
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
    
}


export const setDeckLoading = () => {
    return {
        type: MY_DECK_LOADING
    }
}