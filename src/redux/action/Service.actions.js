import axios from "axios";

export const GET_SERVICE = "GET_SERVICE";

export const getLocation = (data) => {
  return {
    type: GET_SERVICE,
    payload: data,
  };
};

export const getServiceAction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://server-promeet.herokuapp.com/api/admin/data/service"
    );
    dispatch(getLocation(response.data.service));
    // console.log('hasil ambil data lokasi', response.data.service);
  };
};
