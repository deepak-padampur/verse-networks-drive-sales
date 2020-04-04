
import authReducer from './authReducer';
import contactReducer from './contactReducer';

//Combine all reducers to one single reducer
import { combineReducers } from 'redux';
//pass it to store
import { firestoreReducer } from 'redux-firestore';
const rootReducer = combineReducers({
    auth: authReducer,
    contact: contactReducer,
    firestore: firestoreReducer
});

export default rootReducer;