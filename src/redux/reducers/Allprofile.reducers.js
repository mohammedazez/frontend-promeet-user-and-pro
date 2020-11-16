import {
  GET_ALL_PROFILE_REQUEST,
  GET_ALL_PROFILE_SUCCESS,
  GET_ALL_PROFILE_FAILED,
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
  GET_PROFILE_DETAILS_FAILED,
} from "../action/Allprofile.action";

const intialState = {
  listprofile: [],
  profiledetail: {},
  loading: false,
  error: null,
};

export default function semuaprofile(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        listprofile: action.payload,
      };
    case GET_ALL_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PROFILE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        profiledetail: action.payload,
      };
    case GET_PROFILE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
