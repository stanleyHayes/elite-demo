import {
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_IN_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS
} from "./auth-action-types";

const user = {
    name: 'Stanley Hayford',
    avatar: `${process.env.PUBLIC_URL}/images/elite-logo.png`
}

const  INITIAL_STATE = {
    currentUser: null,
    error: null,
    loading: false,
    token: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default authReducer;
