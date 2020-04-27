const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'STORE_RESULT') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    if (action.type === 'DELETE_RESULT') {
        const updatedArray = state.persons.filter(persons => persons.id !== action.resltElId)
        return {
            ...state,
            persons: updatedArray

        }

    }
    return state;
};
export default reducer;