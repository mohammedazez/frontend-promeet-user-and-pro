import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import booking from "./Booking.Reducers";
import profilprofessional from "./ProfilProfessional.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  booking,
  profilprofessional,
});

export default rootReducers;
