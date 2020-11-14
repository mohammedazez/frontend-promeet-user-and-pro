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
<<<<<<< HEAD
    "https://server-promeet.herokuapp.com/api/admin/add-booking",
    values
  )
    .then((response) => {
      console.log(response);
      if (response) {
        history.push("/confirmation");
      }
    })
=======
    "https://server-promeet.herokuapp.com/api/add-booking",
    values
  )
    .then((response) => console.log(response))
>>>>>>> 847c5210aca189c5522a71d64221073b63a4f1d4
    .catch((error) => {
      console.log("error", error);
    });
};
