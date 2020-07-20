import {INSTRUCTORS} from "./instructors.data";

const INITIAL_STATE = {
    error: null,
    instructors: INSTRUCTORS,
    selectedInstructor: null
};

const instructorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default instructorsReducer;
