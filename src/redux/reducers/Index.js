import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import booking from "./Booking.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  booking,
});

export default rootReducers;
