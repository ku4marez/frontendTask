import {
    ACTION_TYPES_OBJ
} from "./ActionTypes";
import {axiosInstance} from "../interceptors/Interceptor";
import {OK_STATUS_CODE} from "../constants/Constants";
import {
    createUserActionCreator,
    deleteUserActionCreator,
    getUsersActionCreator,
    updateUserActionCreator
} from "./ActionCreators";

export const getUsers = () => dispatch => {
    axiosInstance.get("/users/").then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(getUsersActionCreator(response));
        }
    });
};

export const createUser = newUser => (dispatch) => {
    axiosInstance
        .post("/users/", JSON.stringify(newUser))
        .then((response) => {
            if (response.status === OK_STATUS_CODE) {
                window.history.push("/users");
                dispatch(createUserActionCreator(response));
            }
        })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.POST_USER_FAILURE,
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
                dispatch(updateUserActionCreator(response));
            }
        })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.UPDATE_USER_FAILURE,
                payload: {
                    error: error.response.data.message,
                },
            });
        });
};

export const deleteUser = userId => dispatch => {
    axiosInstance.delete("/users/?id=" + userId).then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(deleteUserActionCreator(response));
        }
    })
        .catch((error) => {
            dispatch({
                type: ACTION_TYPES_OBJ.DELETE_USER_FAILURE,
                payload: {
                    error: error.response.data.message,
                },
            });
        });
};