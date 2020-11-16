import Axios from "axios";

// Daftar constant
export const POST_BOOKING = "POST_BOOKING";

export const postBooking = (data) => {
  return {
    type: POST_BOOKING,
    payload: data,
  };
};

export const postBookingAction = (values, history) => (dispatch) => {
  
console.log('values', values)
  return Axios.post(
    "http://localhost:8080/api/admin/add-booking", 
    values
  )
    .then((response) => {
      dispatch(postBooking(response.data.booking))
      console.log('response booking', response)
      // if (response.data.booking) {
      //   history.push("/confirmation");
      // }
    })
    .catch((error) => {
      console.log("error", error);
    });
};
