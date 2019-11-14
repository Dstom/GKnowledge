import { GET_MY_DECK, ADD_MY_FLASHCARD, EDIT_MY_FLASHCARD, DELETE_MY_FLASHCARD, MY_DECK_LOADING } 
from '../actions/types';

const initialState = {
    deck: null,
    isLoading: false,
}

export default function(state = initialState, action){
    switch(action.type){        
        case GET_MY_DECK:
            return{
                ...state,
                deck: action.payload,
                isLoading: false
            }
        case ADD_MY_FLASHCARD:
            return{
                ...state,
                deck:{
                    ...state.deck,
                    flashcards: [action.payload, ...state.deck.flashcards]
                }
            }        
        case DELETE_MY_FLASHCARD:
            return {
                ...state,
               // items: state.items.filter(item => item._id != action.payload),
                deck:{
                    ...state.deck,
                    flashcards: state.deck.flashcards.filter(card => card._id != action.payload) 
                }
            }
        /*case ADD_LESSON:
            return{
                ...state,
                myLessons: [action.payload, ...state.myLessons]  
            }
        case LESSONS_LOADING:
            return{
                ...state,
                isLoading: true
            }      */ 
        default:
            return state;
    }
}