import {axiosInstance} from "../interceptors/Interceptor";
import {OK_STATUS_CODE} from "../constants/Constants";
import {
    failureUsersActionCreator,
    successUserActionCreator,
    successUsersActionCreator
} from "./ActionCreators";

export const getUsers = () => dispatch => {
    axiosInstance.get("/users/").then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(successUsersActionCreator(response));
        }
    });
};

export const createUser = newUser => (dispatch) => {
    axiosInstance
        .post("/users/", JSON.stringify(newUser))
        .then((response) => {
            if (response.status === OK_STATUS_CODE) {
                window.history.push("/users");
                dispatch(successUserActionCreator(response));
            }
        })
        .catch((error) => {
            dispatch(failureUsersActionCreator(error));
        });
};

export const updateUser = (userId, updatedUser) => dispatch => {
    axiosInstance.put("/users/?id=" + userId, JSON.stringify(updatedUser))
        .then((response) => {
            if (response.status === OK_STATUS_CODE) {
                dispatch(successUserActionCreator(response));
            }
        })
        .catch((error) => {
            dispatch(failureUsersActionCreator(error));
        });
};

export const deleteUser = userId => dispatch => {
    axiosInstance.delete("/users/?id=" + userId).then((response) => {
        if (response.status === OK_STATUS_CODE) {
            dispatch(successUserActionCreator(response));
        }
    })
        .catch((error) => {
            dispatch(failureUsersActionCreator(error));
        });
};