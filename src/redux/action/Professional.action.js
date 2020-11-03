import axios from "axios";
export const GET_ALL_PROFESSIONALS_REQUEST = "GET_ALL_PROFESSIONALS_REQUEST";
export const GET_ALL_PROFESSIONALS_SUCCESS = "GET_ALL_PROFESSIONALS_SUCCESS";
export const GET_ALL_PROFESSIONALS_FAILED = "GET_ALL_PROFESSIONALS_FAILED";
export const GET_PROFESSIONAL_DETAILS_REQUEST =
  "GET_PROFESSIONALS_DETAILS_REQUEST";
export const GET_PROFESSIONAL_DETAILS_SUCCESS =
  "GET_PROFESSIONALS_DETAILS_SUCCESS";
export const GET_PROFESSIONAL_DETAILS_FAILED =
  "GET_PROFESSIONALS_DETAILS_FAILED";

export const getProfessionalAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PROFESSIONALS_REQUEST,
      });

      const response = await axios.get(
        "https://server-gaunrental.herokuapp.com/api/v1/product"
      );

      dispatch({
        type: GET_ALL_PROFESSIONALS_SUCCESS,
        payload: response.data.product,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PROFESSIONALS_FAILED,
        payload: error,
      });
    }
  };
};

export const getProfessionalById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PROFESSIONAL_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://server-gaunrental.herokuapp.com/api/v1/product/${id}`
      );

      dispatch({
        type: GET_PROFESSIONAL_DETAILS_SUCCESS,
        payload: response.data.product,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFESSIONAL_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};
