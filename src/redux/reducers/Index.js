import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
});

export default rootReducers;
