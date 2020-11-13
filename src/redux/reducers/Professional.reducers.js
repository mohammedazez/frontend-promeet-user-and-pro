import { GET_PROFILE_DETAIL } from "../action/Professional.action";

const intialState = {
  profileDetails: {},
};

export default function professional(state = intialState, action) {
  switch (action.type) {
    case GET_PROFILE_DETAIL:
      return {
        ...state,
        data: action.playload,
      };
    default:
      return state;
  }
}
