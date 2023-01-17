import { createStore, applyMiddleware, compose } from "redux";
import foodReducer from "./reducer/foodReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  foodReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
