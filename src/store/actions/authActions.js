import firebase from 'firebase';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        //initialize firebase instance
        // const firebase = getFirebase();


        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}