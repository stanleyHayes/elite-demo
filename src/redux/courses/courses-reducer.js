const INITIAL_STATE = {
    error: null,
    courses: [],
    selectedCourse: null
};

const coursesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default coursesReducer;
