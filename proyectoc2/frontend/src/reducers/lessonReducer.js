import { GET_LESSONS, ADD_LESSON, GET_LESSON, LESSONS_LOADING, GET_MY_LESSONS } 
from '../actions/types';

const initialState = {
    lessons: [],
    myLessons: [],
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LESSONS:
            return{
                ...state,
                lessons: action.payload,
                isLoading: false
            }
        case GET_MY_LESSONS:
            return{
                ...state,
                myLessons: action.payload,
                isLoading: false
            }
       /* case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id != action.payload)
            }*/
        case ADD_LESSON:
            return{
                ...state,
                myLessons: [action.payload, ...state.myLessons]  
            }
        case LESSONS_LOADING:
            return{
                ...state,
                isLoading: true
            }       
        default:
            return state;
    }
}