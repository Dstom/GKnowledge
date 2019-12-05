import { GET_FLASHCARDS_STUDY, UPDATE_FLASHCARD_STUDY, STUDY_LOADING} 
from '../actions/types';

const initialState = {
    deckStudy: null,
    isLoading: false,
}

export default function(state = initialState, action){
    switch(action.type){        
        case GET_FLASHCARDS_STUDY:
            return{
                ...state,
                deckStudy: action.payload,
                isLoading: false
            }
        case UPDATE_FLASHCARD_STUDY:
            return{
                ...state
            } 
        case STUDY_LOADING:
            return{
                ...state,
                isLoading: true
            }       
        default:
            return state;
    }
}