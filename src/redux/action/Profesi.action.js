import axios from "axios";
export const GET_ALL_PROFESI_REQUEST = "GET_ALL_PROFESI_REQUEST";
export const GET_ALL_PROFESI_SUCCESS = "GET_ALL_PROFESI_SUCCESS";
export const GET_ALL_PROFESI_FAILED = "GET_ALL_PROFESI_FAILED";
export const GET_PROFESI_DETAILS_REQUEST = "GET_PROFESI_DETAILS_REQUEST";
export const GET_PROFESI_DETAILS_SUCCESS = "GET_PROFESI_DETAILS_SUCCESS";
export const GET_PROFESI_DETAILS_FAILED = "GET_PROFESI_DETAILS_FAILED";

export const getProfesiAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PROFESI_REQUEST,
      });
      const response = await axios.get(
        "https://server-promeet.herokuapp.com/api/profesi"
      );
      //   console.log("ini data profesi di action", response);
      dispatch({
        type: GET_ALL_PROFESI_SUCCESS,
        payload: response.data.profesi,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PROFESI_FAILED,
        payload: error,
      });
    }
  };
};

export const getProfesiById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PROFESI_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://server-promeet.herokuapp.com/api/profesi/${id}`
      );

      console.log("ini data detail profesi di action", response);
      dispatch({
        type: GET_PROFESI_DETAILS_SUCCESS,
        payload: response.data.profesi,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFESI_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};
