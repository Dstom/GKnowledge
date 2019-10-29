import { GET_LESSONS, ADD_LESSON, GET_LESSON, LESSONS_LOADING } 
from '../actions/types';

import { tokenConfig } from'./authActions';
import axios from 'axios';

export const addLesson = (lesson) => async (dispatch, getState)  => {

    

    const res = await axios.post('http://localhost:4000/api/lessons', lesson, tokenConfig(getState));   
    return Promise.resolve(dispatch({
        type: ADD_LESSON,
        payload: res.data
    }));
}

export const setLessonsLoading = () => {
    return{
        type: LESSONS_LOADING
    }
}