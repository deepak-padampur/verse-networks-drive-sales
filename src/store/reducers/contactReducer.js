const initState = {
    contacts: [
        { id: '1', name: 'Deepak', notes: 'This is important' },
        { id: '2', name: 'Vikash', notes: 'This is more important' },
        { id: '3', name: 'Dikshant', notes: 'This is the most important' },
    ]
}//initial state


const contactReducer = (state = initState, action) => {
    //checking the action type
    console.log('action=' + action.type);
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log('Person added successfully', action.contact);
        default:
            console.log('Default');

    }
    return state

}

export default contactReducer