import { GET_LESSONS, ADD_LESSON, GET_LESSON, LESSONS_LOADING } 
from '../actions/types';

const initialState = {
    lessons: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LESSONS:
            return{
                ...state,
                lessons: action.payload,
                loading: false
            }
       /* case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id != action.payload)
            }*/
        case ADD_LESSON:
            return{
                ...state,
                lessons: [action.payload, ...state.lessons]                
            }
        case LESSONS_LOADING:
            return{
                ...state,
                loading: true
            }       
        default:
            return state;
    }
}