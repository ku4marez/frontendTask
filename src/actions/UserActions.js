import {
    ACTION_TYPES_OBJ
} from "./ActionTypes";
import {axiosInstance} from "../interceptors/Interceptor";
import {OK_STATUS_CODE} from "../constants/Constants";

export const getUsers = () => dispatch => {
    axiosInstance.get("/users/").then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(
                {
                    type: ACTION_TYPES_OBJ.GET_USERS,
                    payload: response.data,
                },
            );
        }
    });
};

export const postUser = (newUser) => (dispatch) => {
    axiosInstance
        .post("/users/", JSON.stringify(newUser))
        .then((response) => {
            if (response.status === OK_STATUS_CODE) {
                // eslint-disable-next-line no-restricted-globals
                history.push("/users");
                dispatch({
                    type: ACTION_TYPES_OBJ.POST_USER,
                    payload: response.data,
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.POST_USER,
                payload: {
                    error: error.response.data.message,
                },
            });
        });
};

export const updateUser = (userId, updatedUser) => dispatch => {
    axiosInstance.put("/users/?id=" + userId, JSON.stringify(updatedUser))
        .then((response) => {
            if (response.status === OK_STATUS_CODE) {
                dispatch(
                    {
                        type: ACTION_TYPES_OBJ.UPDATE_USER,
                        payload: response.data,
                    },
                );
            }
        })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.UPDATE_USER,
                payload: {
                    error: error.response.data.message,
                },
            });
        });
};

export const deleteUser = (userId) => dispatch => {
    axiosInstance.delete("/users/?id=" + userId).then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(
                {
                    type: ACTION_TYPES_OBJ.DELETE_USER,
                    payload: response.data,
                },
            );
        }
    })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.DELETE_USER,
                payload: {
                    error: error.response.data.message,
                },
            });
        });
};