import Axios from "axios";

<<<<<<< HEAD
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
    "https://server-promeet.herokuapp.com/api/admin/data/user/",
    values
  )
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("error", error);
    });
};
=======
// Daftar Constaant
export const GET_DATA_PESANAN = "GET_DATA_PESANAN ";

// Function dari Constant
export const getDataPesananUSer = (data) => {
  return {
    type: GET_DATA_PESANAN,
    payload: data,
  };
};
>>>>>>> 847c5210aca189c5522a71d64221073b63a4f1d4
