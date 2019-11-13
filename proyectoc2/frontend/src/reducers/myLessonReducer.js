import {  GET_MY_LESSON, MY_LESSONS_LOADING, GET_MY_LESSONS, ADD_MY_DECK, ADD_MY_LESSON } 
from '../actions/types';

const initialState = {
    myLessons: [],
    isLoading: false,
    myLesson: null
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_MY_LESSON:
            return{
                ...state,
                myLesson: action.payload,
                isLoading: false
            }        
        case GET_MY_LESSONS:
            return{
                ...state,
                myLessons: action.payload,
                isLoading: false
            }  
        case MY_LESSONS_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case ADD_MY_DECK:
            return{
                ...state,
                myLesson:{
                    ...state.myLesson,
                    decks: [action.payload, ...state.myLesson.decks]
                }
            }
        case ADD_MY_LESSON:
            return{
                ...state,
                myLessons: [action.payload, ...state.myLessons] 
            }          
        default:
            return state;
    }
}