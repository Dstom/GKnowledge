import {  GET_MY_LESSON, MY_LESSONS_LOADING, GET_MY_LESSONS, ADD_DECK } 
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
                isLoadin: false
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
        case ADD_DECK:
            return{
                ...state
            }       
        default:
            return state;
    }
}