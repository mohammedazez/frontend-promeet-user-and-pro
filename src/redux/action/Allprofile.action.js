import Axios from "axios";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";

export function getAllProfile(data) {
  return {
    type: GET_ALL_PROFILE,
    playload: data,
  };
}

export const getProfileAction = () => {
  return async (dispatch) => {
    const response = await Axios.get(
      "https://server-promeet.herokuapp.com/api/admin/data/profile"
    );
    dispatch(getAllProfile(response.data.profile));
    console.log("hasil all profile di action", response.data.profile);
  };
};
