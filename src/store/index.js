import * as reducers from "./reducers/movieReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const reducersAll = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducersAll,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
