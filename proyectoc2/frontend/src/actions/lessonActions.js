import { GET_LESSONS, ADD_LESSON, GET_LESSON, LESSONS_LOADING, GET_MY_LESSONS }
    from '../actions/types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import axios from 'axios';

export const addLesson = (lesson) => async (dispatch, getState) => {
    try {
        const res = await axios.post('http://localhost:4000/api/lessons', lesson, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: ADD_LESSON,
            payload: res.data
        }));

    }catch(err){
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
    
}

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

export const setLessonsLoading = () => {
    return {
        type: LESSONS_LOADING
    }
}