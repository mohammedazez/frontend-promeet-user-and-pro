import Axios from "axios";

// Daftar Constaant
export const GET_DATA_PESANAN = "GET_DATA_PESANAN ";

// Function dari Constant
export const getDataPesananUSer = (data) => {
  return {
    type: GET_DATA_PESANAN,
    payload: data,
  };
};
