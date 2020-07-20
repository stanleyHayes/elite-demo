import {combineReducers} from "redux";

import authReducer from "./authentication/auth-reducer";
import studentsReducer from "./students/students-reducer";
import instructorsReducer from "./instructors/instructors-reducer";
import schedulesReducer from "./schedules/schedules-reducer";
import coursesReducer from "./courses/courses-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    students: studentsReducer,
    instructors: instructorsReducer,
    schedules: schedulesReducer,
    courses: coursesReducer
});

export default rootReducer;
