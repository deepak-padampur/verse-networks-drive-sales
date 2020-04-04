export const createContact = (contact) => {
    return (dispatch, getState) => {
        //return an action
        //Make async call to database
        dispatch({
            type: 'ADD_CONTACT',
            contact

        });

    }
};