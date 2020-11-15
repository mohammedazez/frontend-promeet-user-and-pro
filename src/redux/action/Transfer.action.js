import axios from "axios";
export const GET_ALL_TRANSFER_REQUEST = "GET_ALL_TRANSFER_REQUEST";
export const GET_ALL_TRANSFER_SUCCESS = "GET_ALL_TRANSFER_SUCCESS";
export const GET_ALL_TRANSFER_FAILED = "GET_ALL_TRANSFER_FAILED";

export const dataTransferAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_TRANSFER_REQUEST,
      });

      const response = await axios.get(
        "https://server-promeet.herokuapp.com/api/admin/data/transfer"
      );

      dispatch({
        type: GET_ALL_TRANSFER_SUCCESS,
        payload: response.data.transfer,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TRANSFER_FAILED,
        payload: error,
      });
    }
  };
};
