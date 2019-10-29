import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import lessonReducer from './lessonReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    lesson: lessonReducer
});