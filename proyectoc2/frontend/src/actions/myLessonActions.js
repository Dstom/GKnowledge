import { MY_LESSONS_LOADING, GET_MY_LESSONS, GET_MY_LESSON, ADD_DECK }
    from '../actions/types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import axios from 'axios';

export const getMyLessons = (id) => async (dispatch, getState) => {

    dispatch(setLessonsLoading());
    try {
        const res = await axios.get('http://localhost:4000/api/users/' + id, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: GET_MY_LESSONS,
            payload: res.data
        }));
    } catch (err) {
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
}

export const getMyLesson = (id) => async (dispatch, getState) => {

    dispatch(setLessonsLoading());
    try {
        const res = await axios.get('http://localhost:4000/api/lessons/' + id, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: GET_MY_LESSON,
            payload: res.data
        }));
    } catch (err) {
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
}

export const addDeck = (id, deck) => async (dispatch, getState) => {
    try {
        const res = await axios.post('http://localhost:4000/api/lessons/' + id +'/decks', deck, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: ADD_DECK,
            payload: res.data
        }));

    }catch(err){
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
    
}


export const setLessonsLoading = () => {
    return {
        type: MY_LESSONS_LOADING
    }
}