const INITIAL_STATE = {
    error: null,
    instructors: [],
    selectedInstructor: null
};

const instructorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default instructorsReducer;
