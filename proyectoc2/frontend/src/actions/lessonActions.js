import { GET_LESSONS, ADD_LESSON, GET_LESSON, LESSONS_LOADING }
    from '../actions/types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import axios from 'axios';


export const setLessonsLoading = () => {
    return {
        type: LESSONS_LOADING
    }
}