import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
<<<<<<< HEAD
import profesi from "./Profesi.reducers";
import booking from "./Booking.Reducers";
import profilprofessional from "./ProfilProfessional.reducers";
import transfer from "./Transfer.reducers";
=======
import booking from "./Booking.reducers";
>>>>>>> 847c5210aca189c5522a71d64221073b63a4f1d4

const rootReducers = combineReducers({
  professional,
  user,
<<<<<<< HEAD
  profesi,
  booking,
  profilprofessional,
  transfer,
=======
  booking,
>>>>>>> 847c5210aca189c5522a71d64221073b63a4f1d4
});

export default rootReducers;
