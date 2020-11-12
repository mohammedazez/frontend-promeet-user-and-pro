import Axios from "axios";
export const GET_PROFILE_DETAIL = "GET_PROFILE_DETAIL";

export function getProfileDetail(data) {
  return {
    type: GET_PROFILE_DETAIL,
    playload: data,
  };
}

export const getProfileDetailAction = (id) => {
  return async (dispatch) => {
    const response = await Axios.get(
      `https://server-promeet.herokuapp.com/api/profesional/${id}`
    );
    dispatch(getProfileDetail(response.data.profile));
    console.log("hasil detail di action", response.data.profile);
  };
};
