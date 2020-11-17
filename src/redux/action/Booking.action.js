import Axios from "axios";

// Daftar constant
export const GET_BOOKING = 'GET_BOOKING';
export const POST_BOOKING = "POST_BOOKING";
export const EDIT_BOOKING = "EDIT_BOOKING";

export function getBooking (data) {
  return {
      type: GET_BOOKING,
      playload: data,
  }
}


export const postBooking = (data) => {
  return {
    type: POST_BOOKING,
    payload: data,
  };
};


export const editBooking = (data) => {
  return {
    type: EDIT_BOOKING,
    payload: data,
  };
};



export const getBookingAction = ()  => {
  return async (dispatch) => {
      const response = await Axios
      .get('http://server-promeet.herokuapp.com/api/admin/data/booking');
      dispatch(getBooking(response.data.booking));
      console.log('hasil ambil data booking', response.data.booking);
  }
}

export const postBookingAction = (values, history) => (dispatch) => {

  
console.log('values', values)
  return Axios.post(
    "http://server-promeet.herokuapp.com/api/admin/add-booking", 
    values
  )

    .then((response) => {
      dispatch(postBooking(response.data.booking));
      console.log("response booking", response.data.booking);
      if (response.data.booking) {
        history.push("/confirmation");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};


export const editBookingAction = (values, profiledetail, event) => {
  return async (dispatch) => {
    console.log('value', values)
    event.preventDefault();
    return Axios
    .put(
      `http://localhost:8080/api/updateImg/${profiledetail._id}`, values
    )
    .then((response) => {
      console.log("response edit", response);
      dispatch(editBooking(response.data));
    })
    .catch((error) => {
      console.log(` hasil eror edit ${error}`);
    });
  };
  };
