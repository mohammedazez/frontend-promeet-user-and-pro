import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";

const rootReducers = combineReducers({
  professional,
  user,
});

export default rootReducers;
