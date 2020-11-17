import axios from "axios";

export const GET_LOCATION = "GET_LOCATION";

export const getLocation = (data) => {
  return {
    type: GET_LOCATION,
    payload: data,
  };
};

export const getLocationAction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://server-promeet.herokuapp.com/api/admin/data/location"
    );
    dispatch(getLocation(response.data.location));
    // console.log('hasil ambil data lokasi', response.data.location);
  };
};
