import {
    ACTION_TYPES_OBJ,
} from "../actions/ActionTypes";

const initialState = {
    users: [],
    user: {},
    failureErrorMessage: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES_OBJ.USERS_RESPONSE_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        case ACTION_TYPES_OBJ.USER_RESPONSE_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case ACTION_TYPES_OBJ.RESPONSE_FAILURE:
            return {
                ...state,
                failureErrorMessage: action.payload.error,
            };
        default:
            return state;
    }
};

export default userReducer;