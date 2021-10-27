import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { carListReducer } from "./model/reducers";
import { additionallyReducer } from "./additionally/reducers";
import { locationReducer } from "./location/reducers";
import { tabsReducer } from "./tabs/reducers";

const rootReducer = combineReducers({
  carListReducer,
  additionallyReducer,
  locationReducer,
  tabsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));