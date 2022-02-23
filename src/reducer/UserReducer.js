import {
    ACTION_TYPES_OBJ,
} from "../actions/ActionTypes";

const initialState = {
    users: [],
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES_OBJ.GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ACTION_TYPES_OBJ.POST_USER:
            return {
                ...state,
                registrationErrorMessage: action.payload.error,
            };
        case ACTION_TYPES_OBJ.UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ACTION_TYPES_OBJ.DELETE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
