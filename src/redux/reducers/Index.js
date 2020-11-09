import { combineReducers } from "redux";
import professional from "./Professional.reducers";
// import booking from "./Booking.reducers";

const rootReducers = combineReducers({
  professional,
  // booking,
});

export default rootReducers;
