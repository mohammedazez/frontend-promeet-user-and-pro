import {
  GET_ALL_PROFESSIONALS_REQUEST,
  GET_ALL_PROFESSIONALS_SUCCESS,
  GET_ALL_PROFESSIONALS_FAILED,
  GET_PROFESSIONAL_DETAILS_REQUEST,
  GET_PROFESSIONAL_DETAILS_SUCCESS,
  GET_PROFESSIONAL_DETAILS_FAILED,
} from "../action/Professional.action";

const intialState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null,
};

export default function product(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_PROFESSIONALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PROFESSIONALS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_ALL_PROFESSIONALS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PROFESSIONAL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFESSIONAL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
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
