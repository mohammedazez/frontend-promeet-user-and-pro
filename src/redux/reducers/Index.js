import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import product from "./Product.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  product,
});

export default rootReducers;
