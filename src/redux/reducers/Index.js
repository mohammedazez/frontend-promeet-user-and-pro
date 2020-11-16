import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import location from "./Location.reducers";
import service from "./Service.reducers";


const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  location,
  service
});

export default rootReducers;
