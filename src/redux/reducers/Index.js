import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import booking from "./Booking.Reducers";
import profilprofessional from "./ProfilProfessional.reducers";
import transfer from "./Transfer.reducers";
import semuaprofile from "./Allprofile.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  booking,
  profilprofessional,
  transfer,
  semuaprofile,
});

export default rootReducers;
