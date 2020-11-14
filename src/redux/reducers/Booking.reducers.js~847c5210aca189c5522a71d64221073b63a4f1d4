import { POST_BOOKING } from "../action/Booking.action";

const intialState = {
  postBooking: {},
};

export default function bookingReducers(state = intialState, action) {
  switch (action.type) {
    case POST_BOOKING:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
