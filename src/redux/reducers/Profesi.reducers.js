import {
  GET_ALL_PROFESI_REQUEST,
  GET_ALL_PROFESI_SUCCESS,
  GET_ALL_PROFESI_FAILED,
  GET_PROFESI_DETAILS_REQUEST,
  GET_PROFESI_DETAILS_SUCCESS,
  GET_PROFESI_DETAILS_FAILED,
} from "../action/Profesi.action";

const intialState = {
  profession: [],
  professionDetails: {},
  loading: false,
  error: null,
};

export default function profesi(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_PROFESI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PROFESI_SUCCESS:
      return {
        ...state,
        loading: false,
        profession: action.payload,
      };
    case GET_ALL_PROFESI_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PROFESI_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFESI_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        professionDetails: action.payload,
      };
    case GET_PROFESI_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
