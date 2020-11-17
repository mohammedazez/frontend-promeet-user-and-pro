import { GET_BOOKING, POST_BOOKING, EDIT_BOOKING } from "../action/Booking.action";

const intialState = {
  data: [],
};

export default function bookingReducers(state = intialState, action) {
  switch (action.type) {
    case GET_BOOKING:
      return{
          ...state,
          data: action.playload
      }
    case POST_BOOKING:
      return {
        ...state,
        data: action.payload,
      };
      case EDIT_BOOKING:
        return {
          ...state,
          data: action.payload
        }
    default:
      return state;
  }
}
