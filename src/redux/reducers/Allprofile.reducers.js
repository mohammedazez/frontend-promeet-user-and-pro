import { GET_ALL_PROFILE } from "../action/Allprofile.action";

const intialState = {
  profiles: {},
};

export default function profile(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_PROFILE:
      return {
        ...state,
        data: action.playload,
      };
    default:
      return state;
  }
}
