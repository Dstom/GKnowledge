import { GET_LESSONS, ADD_LESSON, LESSONS_LOADING } 
from '../actions/types';

const initialState = {
    lessons: [],
    isLoading: false,
}

export default function(state = initialState, action){
    switch(action.type){        
        case GET_LESSONS:
            return{
                ...state,
                lessons: action.payload,
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