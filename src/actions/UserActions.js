import {
    GET_USERS,
    POST_USER,
    UPDATE_USER,
    DELETE_USER
} from "./ActionTypes";
import {axiosInstance} from "../interceptors/Interceptor";

export function getUsers() {
    return async (dispatch) => {
        await axiosInstance.get("/users/").then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: GET_USERS,
                        payload: response.data,
                    },
                );
            }
        });
    };
}

export function postUser() {
    return async (dispatch) => {
        await axiosInstance.post("/users/").then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: POST_USER,
                        payload: response.data,
                    },
                );
            }
        });
    };
}

export function updateUser() {
    return async (dispatch) => {
        await axiosInstance.put("/users/").then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: UPDATE_USER,
                        payload: response.data,
                    },
                );
            }
        });
    };
}

export function deleteUser(id) {
    return async (dispatch) => {
        await axiosInstance.delete("/users/" + id).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: DELETE_USER,
                        payload: response.data,
                    },
                );
            }
        });
    };
}