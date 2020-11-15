import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import booking from "./Booking.Reducers";
import transfer from "./Transfer.reducers";
import semuaprofile from "./Allprofile.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  booking,
  transfer,
  semuaprofile,
});

export default rootReducers;
