import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { carListReducer } from "./model/reducers";
import { additionallyReducer } from "./additionally/reducers";
import { locationReducer } from "./location/reducers";

const rootReducer = combineReducers({
  carListReducer,
  additionallyReducer,
  locationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));