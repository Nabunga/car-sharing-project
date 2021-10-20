import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { carListReducer } from "./model/reducers";

const rootReducer = combineReducers({
  carListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
