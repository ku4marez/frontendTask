import thunk from "redux-thunk";
import {createStore, compose, applyMiddleware} from "redux";
import combineReducers from "./reducers/index";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
