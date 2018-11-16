import { combineReducers } from "redux";

import bucketsReducer from "./bucketsReducer";

export const rootReducer = combineReducers({
  buckets: bucketsReducer
});
