import { combineReducers } from "redux";
import produk from "./Product.reducers";
import login from "./Login.reducers";
import signup from "./Register.reducers";
import booking from "./Booking.reducers";

const rootReducers = combineReducers({
  produk,
  login,
  signup,
  booking,
});

export default rootReducers;
