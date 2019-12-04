import { GET_FLASHCARDS_STUDY, UPDATE_FLASHCARD_STUDY, STUDY_LOADING}
    from '../actions/types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import axios from 'axios';

export const getFlashcardToStudy = (user,deck) => async (dispatch, getState) => {

    dispatch(setStudyLoading());
    try {
        const res = await axios.post('http://localhost:4000/api/studyflashcards' ,{user, deck}, tokenConfig(getState));
        return Promise.resolve(dispatch({
            type: GET_FLASHCARDS_STUDY,
            payload: res.data
        }));
    } catch (err) {
        return err => dispatch(returnErrors(err.response.data, err.response.status))
    }
}

export const setStudyLoading = () => {
    return {
        type: STUDY_LOADING
    }
}