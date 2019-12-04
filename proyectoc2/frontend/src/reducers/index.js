import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import lessonReducer from './lessonReducer';
import myLessonReducer from './myLessonReducer';
import deckReducer from './deckReducer';
import studyReducer from './studyReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    lesson: lessonReducer,
    mylesson: myLessonReducer,
    deck: deckReducer,
    study: studyReducer
});