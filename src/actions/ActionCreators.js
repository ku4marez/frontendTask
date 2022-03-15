import {ACTION_TYPES_OBJ} from "./ActionTypes";

export const successUsersActionCreator = (response) => {
    return {
        type: ACTION_TYPES_OBJ.USERS_RESPONSE_SUCCESS,
        payload: response.data,
    }
}

export const successUserActionCreator = (response) => {
    return {
        type: ACTION_TYPES_OBJ.USER_RESPONSE_SUCCESS,
        payload: response.data,
    }
}

export const failureUsersActionCreator = (error) => {
    return {
        type: ACTION_TYPES_OBJ.RESPONSE_FAILURE,
        payload: {
            error: error.response.data.message,
        }
    }
}