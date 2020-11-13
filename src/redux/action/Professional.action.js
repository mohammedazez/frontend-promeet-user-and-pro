import axios from "axios";
export const GET_PROFESSIONAL_DETAILS_REQUEST =
  "GET_PROFESSIONALS_DETAILS_REQUEST";
export const GET_PROFESSIONAL_DETAILS_SUCCESS =
  "GET_PROFESSIONALS_DETAILS_SUCCESS";
export const GET_PROFESSIONAL_DETAILS_FAILED =
  "GET_PROFESSIONALS_DETAILS_FAILED";


export const getProfessionalById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PROFESSIONAL_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://server-promeet.herokuapp.com/api/profesional/${id}`
      );

      dispatch({
        type: GET_PROFESSIONAL_DETAILS_SUCCESS,
        payload: response.data.profile,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFESSIONAL_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};

