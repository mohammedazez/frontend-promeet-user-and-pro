import Axios from "axios";

// Daftar Constant
export const GET_DATA_PROFESSIONAL = "GET_DATA_PROFESSIONAL";

// Function Dari Constant
export const getData = (data) => {
  return {
    type: GET_DATA_PROFESSIONAL,
    payload: data,
  };
};

export const getDataAction = (values, event, history) => (dispatch) => {
  event.preventDefault();

  return Axios.post(
    "https://server-promeet.herokuapp.com/api/admin/data/profile/",
    values
  )
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("error", error);
    });
};
