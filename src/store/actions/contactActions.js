export const createContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //return an action
        //Make async call to database
        const firestore = getFirestore();
        firestore.collection('contacts').add({
            ...contact,
            salesFirstName: 'Deepak',
            salesLastName: 'Suna',
            desc: 'This is a note',
            followup: 12,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_CONTACT',
                contact

            });

        }).catch(err => {
            dispatch({ type: 'ADD_CONTACT_ERROR', err });
        });


    }
};