import {ACTION_TYPES_OBJ} from "./ActionTypes";

export function getUsersActionCreator(response) {
    return {
        type: ACTION_TYPES_OBJ.GET_USERS,
        payload: response.data,
    }
}

export function createUserActionCreator(response) {
    return {
        type: ACTION_TYPES_OBJ.POST_USER,
        payload: response.data,
    }
}

export function deleteUserActionCreator(response) {
    return {
        type: ACTION_TYPES_OBJ.DELETE_USER,
        payload: response.data,
    }
}

export function updateUserActionCreator(response) {
    return {
        type: ACTION_TYPES_OBJ.UPDATE_USER,
        payload: response.data,
    }
}
