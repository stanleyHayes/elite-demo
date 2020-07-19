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

import axios from "axios";

export const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST
    }
}

export const signUpSuccess = (user, token) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: {user, token}
    }
}

export const signUpFailure = error => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    }
}

export const signUp = (user) => {
    return dispatch => {
        dispatch(signUpRequest());
        axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/auth/register`,
            data: user
        }).then(response => {
            const {user, token} = response.data;
            dispatch(signUpSuccess(user, token));
        }).catch(error => {
            dispatch(signUpFailure(error.response.data.error));
        })
    }
}
