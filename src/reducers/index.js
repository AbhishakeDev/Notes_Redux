import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import submitReducer from './submitReducer';

export default combineReducers({
    note: noteReducer,
    submit: submitReducer
});