import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import booking from "./Booking.Reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  booking,
});

export default rootReducers;
