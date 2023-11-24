// import reducers from "./reducers/index";
import creditsReducer from "./reducers/creditsReducer";
import moviesReducer from "./reducers/movieReducer";
import videosReducer from "./reducers/videosReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const reducersAll = combineReducers({
  creditsReducer: creditsReducer,
  moviesReducer: moviesReducer,
  videosReducer: videosReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducersAll,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
