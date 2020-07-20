const INITIAL_STATE = {
    error: null,
    students: [],
    selectedStudent: null
};

const studentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default studentsReducer;
