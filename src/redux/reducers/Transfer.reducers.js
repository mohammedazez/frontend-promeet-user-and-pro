import {
  GET_ALL_TRANSFER_REQUEST,
  GET_ALL_TRANSFER_SUCCESS,
  GET_ALL_TRANSFER_FAILED,
} from "../action/Transfer.action";

const intialState = {
  transferMethod: [],
  loading: false,
  error: null,
};

export default function transfer(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_TRANSFER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TRANSFER_SUCCESS:
      return {
        ...state,
        loading: false,
        transferMethod: action.payload,
      };
    case GET_ALL_TRANSFER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
