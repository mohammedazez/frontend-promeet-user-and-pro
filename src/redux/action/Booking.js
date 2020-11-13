import Axios from "axios";

// Daftar constant
export const POST_BOOKING = "POST_BOOKING";

export const postBooking = (data) => {
  return {
    type: POST_BOOKING,
    payload: data,
  };
};

export const postBookingAction = (values, event, history) => (dispatch) => {
  event.preventDefault();

  return Axios.post(
    "https://server-promeet.herokuapp.com/api/add-booking",
    values
  )
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("error", error);
    });
};
