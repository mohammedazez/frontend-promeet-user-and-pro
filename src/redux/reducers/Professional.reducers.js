import {
  GET_PROFESSIONAL_DETAILS_REQUEST,
  GET_PROFESSIONAL_DETAILS_SUCCESS,
  GET_PROFESSIONAL_DETAILS_FAILED,
} from "../action/Professional.action";

const intialState = {
  profileDetails: {},
  loading: false,
  error: null,
};

export default function professional(state = intialState, action) {
  switch (action.type) {
    case GET_PROFESSIONAL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFESSIONAL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        profileDetails: action.payload,
      };
    case GET_PROFESSIONAL_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
