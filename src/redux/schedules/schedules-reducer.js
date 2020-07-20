const INITIAL_STATE = {
    error: null,
    schedules: [],
    selectedSchedule: null
};

const schedulesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default schedulesReducer;
