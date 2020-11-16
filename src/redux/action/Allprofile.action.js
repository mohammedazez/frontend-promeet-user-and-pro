import axios from "axios";
export const GET_ALL_PROFILE_REQUEST = "GET_ALL_PROFILE_REQUEST";
export const GET_ALL_PROFILE_SUCCESS = "GET_ALL_PROFILE_SUCCESS";
export const GET_ALL_PROFILE_FAILED = "GET_ALL_PROFILE_FAILED";
export const GET_PROFILE_DETAILS_REQUEST = "GET_PROFILE_DETAILS_REQUEST";
export const GET_PROFILE_DETAILS_SUCCESS = "GET_PROFILE_DETAILS_SUCCESS";
export const GET_PROFILE_DETAILS_FAILED = "GET_PROFILE_DETAILS_FAILED";

export const getProfileAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PROFILE_REQUEST,
      });

      const response = await axios.get(
        "https://server-promeet.herokuapp.com/api/admin/data/profile/"
      );

      dispatch({
        type: GET_ALL_PROFILE_SUCCESS,
        payload: response.data.profile,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PROFILE_FAILED,
        payload: error,
      });
    }
  };
};

export const getProfileById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PROFILE_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://server-promeet.herokuapp.com/api/admin/data/profile/${id}`
      );
      console.log("ini data semua profile", response);
      dispatch({
        type: GET_PROFILE_DETAILS_SUCCESS,
        payload: response.data.profile,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFILE_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};
