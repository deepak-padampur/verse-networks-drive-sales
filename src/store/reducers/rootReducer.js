
import authReducer from './authReducer';
import contactReducer from './contactReducer';

//Combine all reducers to one single reducer
import { combineReducers } from 'redux';
//pass it to store
const rootReducer = combineReducers({
    auth: authReducer,
    contact: contactReducer
});

export default rootReducer;